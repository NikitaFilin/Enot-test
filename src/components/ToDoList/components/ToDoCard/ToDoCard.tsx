import React from "react";
import { ToDoTitle } from "../../../../styles";
import { Card, CardContent, CardContentTitle, ToDoDescription } from "./styles";
import { Switch } from "@mui/material";
import { Todo } from "../../../../types";
import { ToDoIndicator } from "../../../ReusableComponents";
import { INDICATOR_COLOR_YELLOW } from "../../../../constants";

interface ITodoCard {
  todo: Todo;
}

export const ToDoCard: React.FC<ITodoCard> = ({ todo }) => {
  return (
    <Card>
      <CardContent>
        <ToDoIndicator color={INDICATOR_COLOR_YELLOW} />
        <CardContentTitle>
          <ToDoTitle>{todo.title}</ToDoTitle>
          <ToDoDescription>{todo.description}</ToDoDescription>
        </CardContentTitle>
        <Switch />
      </CardContent>
    </Card>
  );
};
