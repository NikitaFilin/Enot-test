import React from "react";
import "./App.css";

import { ToDoList } from "./components/ToDoList";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <ToDoList />
    </Container>
  );
}

export default App;
