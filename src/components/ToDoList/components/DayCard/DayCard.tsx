import React, { useMemo, useState } from "react";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  ExpandButton,
  ToDoCardContainer,
  CardTitleWrapper,
} from "./styles";
import { Box, Collapse } from "@mui/material";
import { ToDoTitle } from "../../../../styles";
import { ToDoCard } from "../ToDoCard";
import { ITodoMock } from "../../../../types";
import { ToDoIndicator } from "../../../ReusableComponents";
import { INDICATOR_COLOR_DEFAULT } from "../../../../constants";

interface IDayCard {
  todoMock: ITodoMock;
}

export const DayCard: React.FC<IDayCard> = ({ todoMock }) => {
  const [expanded, setExpanded] = useState(false);

  const isDayTodosDone = useMemo(
    () => todoMock.todos.every((todo) => todo.isDone),
    [todoMock.todos]
  );

  return (
    <>
      <Card>
        <CardContent>
          <CardTitleWrapper>
            <ToDoIndicator color={INDICATOR_COLOR_DEFAULT} />
            <ToDoTitle $isDone={isDayTodosDone}>{todoMock.date}</ToDoTitle>
          </CardTitleWrapper>
          <ExpandButton
            aria-label="expand"
            size="small"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ExpandButton>
        </CardContent>
      </Card>
      <Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ToDoCardContainer>
            {todoMock.todos.map((todo, i) => (
              <ToDoCard
                key={todo.id}
                todoDayId={todoMock.id}
                todo={todo}
                index={i}
              />
            ))}
          </ToDoCardContainer>
        </Collapse>
      </Box>
    </>
  );
};
