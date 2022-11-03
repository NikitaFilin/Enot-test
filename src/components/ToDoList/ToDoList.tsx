import React from "react";
import { IconButton } from "@mui/material";
import { DayCard } from "./components/DayCard";
import { todosMock } from "../mock";
import {
  ToDoListContainer,
  ToDoListContainerTitle,
  ToDoListTitle,
  SettingsIcon,
} from "./styles";

interface IToDoList {
  handleShowNewsFeed: () => void;
}

export const ToDoList: React.FC<IToDoList> = ({ handleShowNewsFeed }) => {
  return (
    <ToDoListContainer>
      <ToDoListContainerTitle>
        <ToDoListTitle>To Do</ToDoListTitle>
        <IconButton onClick={handleShowNewsFeed}>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </ToDoListContainerTitle>
      {todosMock.map((todoMock) => (
        <DayCard todoMock={todoMock} />
      ))}
    </ToDoListContainer>
  );
};
