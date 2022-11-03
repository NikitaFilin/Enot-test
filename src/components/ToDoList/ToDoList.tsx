import React from "react";
import { IconButton } from "@mui/material";
import { DayCard } from "../DayCard";
import { todosMock } from "../mock";
import {
  ToDoListContainer,
  ToDoListContainerTitle,
  ToDoListTitle,
  SettingsIcon,
} from "./styles";

export const ToDoList = () => {
  return (
    <ToDoListContainer>
      <ToDoListContainerTitle>
        <ToDoListTitle>To Do</ToDoListTitle>
        <IconButton>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </ToDoListContainerTitle>
      {todosMock.map((todoMock) => (
        <DayCard todoMock={todoMock} />
      ))}
    </ToDoListContainer>
  );
};
