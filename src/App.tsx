import React, { useState } from "react";
import AppContext from "./context/context";
import { NewsFeed } from "./components/NewsFeed";

import { QueryClientProvider } from "react-query";

import { ToDoList } from "./components/ToDoList";
import { Container } from "./styles";
import queryClient from "./api/query";
import { todosMock } from "./components/mock";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isShowNews, setIsShowNews] = useState(false);
  const [todos, setTodos] = useState(todosMock);

  const handlePerformToDo = (
    _: React.ChangeEvent,
    dayId: number,
    id: number
  ) => {
    const newTodos = todos.map((dayTodo) =>
      dayTodo.id === dayId
        ? {
            ...dayTodo,
            todos: dayTodo.todos.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ),
          }
        : dayTodo
    );

    setTodos(newTodos);
  };

  const handleDialogState = () => setIsDialogOpen(!isDialogOpen);
  const handleShowNewsFeed = () => setIsShowNews(!isShowNews);
  return (
    <AppContext.Provider value={{ todos, isDialogOpen, handlePerformToDo }}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <ToDoList
            isShowNews={isShowNews}
            handleShowNewsFeed={handleShowNewsFeed}
            handleDialogState={handleDialogState}
          />
          {isShowNews ? <NewsFeed /> : null}
        </Container>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
