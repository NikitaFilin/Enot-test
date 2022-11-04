import React, { useContext } from "react";
import { IconButton, Switch, Typography } from "@mui/material";
import { DayCard } from "./components/DayCard";
import {
  ToDoListContainer,
  ToDoListContainerTitle,
  ToDoListTitle,
  SettingsIcon,
  DialogSwitchContainer,
} from "./styles";
import { Dialog } from "../ReusableComponents";
import AppContext from "../../context/context";

interface IToDoList {
  isShowNews: boolean;
  handleDialogState: () => void;
  handleShowNewsFeed: () => void;
}

export const ToDoList: React.FC<IToDoList> = ({
  isShowNews,
  handleDialogState,
  handleShowNewsFeed,
}) => {
  const { todos } = useContext(AppContext);
  return (
    <>
      <ToDoListContainer>
        <ToDoListContainerTitle>
          <ToDoListTitle>To Do</ToDoListTitle>
          <IconButton onClick={handleDialogState}>
            <SettingsIcon fontSize="large" $isActive={isShowNews} />
          </IconButton>
        </ToDoListContainerTitle>
        {todos.map((todoMock) => (
          <DayCard key={todoMock.id} todoMock={todoMock} />
        ))}
      </ToDoListContainer>
      <Dialog
        handleDialogState={handleDialogState}
        title="Настройка новостной строки"
      >
        <DialogSwitchContainer>
          <Switch checked={isShowNews} onChange={handleShowNewsFeed} />
          <Typography>{isShowNews ? "Включена" : "Отключена"}</Typography>
        </DialogSwitchContainer>
      </Dialog>
    </>
  );
};
