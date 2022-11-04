import React from "react";
import { IconButton, Switch, Typography } from "@mui/material";
import { DayCard } from "./components/DayCard";
import { todosMock } from "../mock";
import {
  ToDoListContainer,
  ToDoListContainerTitle,
  ToDoListTitle,
  SettingsIcon,
  DialogSwitchContainer,
} from "./styles";
import { Dialog } from "../ReusableComponents";

interface IToDoList {
  isShowNews: boolean;
  isDialogOpen: boolean;
  handleDialogState: () => void;
  handleShowNewsFeed: () => void;
}

export const ToDoList: React.FC<IToDoList> = ({
  isShowNews,
  isDialogOpen,
  handleDialogState,
  handleShowNewsFeed,
}) => {
  return (
    <>
      <ToDoListContainer>
        <ToDoListContainerTitle>
          <ToDoListTitle>To Do</ToDoListTitle>
          <IconButton onClick={handleDialogState}>
            <SettingsIcon fontSize="large" $isActive={isShowNews} />
          </IconButton>
        </ToDoListContainerTitle>
        {todosMock.map((todoMock, i) => (
          <DayCard key={i} todoMock={todoMock} /> // ключ - id с бэка
        ))}
      </ToDoListContainer>
      <Dialog
        isDialogOpen={isDialogOpen}
        handleDialogState={handleDialogState}
        title="Настройка новостной строки"
      >
        <DialogSwitchContainer>
          <Switch onChange={handleShowNewsFeed} />
          <Typography>{isShowNews ? "Включена" : "Отключена"}</Typography>
        </DialogSwitchContainer>
      </Dialog>
    </>
  );
};
