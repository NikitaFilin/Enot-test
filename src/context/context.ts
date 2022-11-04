import React from "react";
import { todosMock } from "../components/mock";

const AppContext = React.createContext({
  todos: todosMock,
  isDialogOpen: false,
  handlePerformToDo: (e: React.ChangeEvent, dayId: number, id: number) => {},
});

export default AppContext;
