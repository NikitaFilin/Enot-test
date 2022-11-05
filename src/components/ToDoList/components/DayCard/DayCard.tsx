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
  dayTodo: ITodoMock;
}

export const DayCard: React.FC<IDayCard> = ({ dayTodo }) => {
  const [expanded, setExpanded] = useState(false);

  const isDayTodosDone = useMemo(
    () => dayTodo.todos.every((todo) => todo.isDone),
    [dayTodo.todos]
  );

  return (
    <>
      <Card>
        <CardContent>
          <CardTitleWrapper>
            <ToDoIndicator color={INDICATOR_COLOR_DEFAULT} />
            <ToDoTitle $isDone={isDayTodosDone}>{dayTodo.date}</ToDoTitle>
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
            {dayTodo.todos.map((todo, i) => (
              <ToDoCard
                key={todo.id}
                todoDayId={dayTodo.id}
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
