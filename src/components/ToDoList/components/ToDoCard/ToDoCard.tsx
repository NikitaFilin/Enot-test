import React, { useContext } from "react";
import { ToDoTitle } from "../../../../styles";
import { Card, CardContent, CardContentTitle, ToDoDescription } from "./styles";
import { Switch } from "@mui/material";
import { Todo } from "../../../../types";
import { ToDoIndicator } from "../../../ReusableComponents";
import { INDICATOR_COLOR_YELLOW } from "../../../../constants";
import AppContext from "../../../../context/context";

interface ITodoCard {
  todo: Todo;
  todoDayId: number;
  index: number;
}

export const ToDoCard: React.FC<ITodoCard> = ({ todo, todoDayId, index }) => {
  const { handlePerformToDo } = useContext(AppContext);
  return (
    <Card>
      <CardContent>
        <ToDoIndicator color={INDICATOR_COLOR_YELLOW} index={index + 1} />
        <CardContentTitle>
          <ToDoTitle $isDone={todo.isDone}>{todo.title}</ToDoTitle>
          <ToDoDescription>{todo.description}</ToDoDescription>
        </CardContentTitle>
        <Switch
          checked={todo.isDone}
          onChange={(e) => handlePerformToDo(e, todoDayId, todo.id)}
        />
      </CardContent>
    </Card>
  );
};
