import React, { useState } from "react";
import AppContext from "./context/context";
import { NewsFeed } from "./components/NewsFeed";

import { QueryClientProvider } from "react-query";

import { ToDoList } from "./components/ToDoList";
import { Container } from "./styles";
import queryClient from "./api/query";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isShowNews, setIsShowNews] = useState(false);

  const handleDialogState = () => setIsDialogOpen(!isDialogOpen);
  const handleShowNewsFeed = () => setIsShowNews(!isShowNews);
  return (
    // <AppContext.Provider value={[]}>
    <QueryClientProvider client={queryClient}>
      <Container>
        <ToDoList
          isShowNews={isShowNews}
          handleShowNewsFeed={handleShowNewsFeed}
          isDialogOpen={isDialogOpen}
          handleDialogState={handleDialogState}
        />
        {isShowNews ? <NewsFeed /> : null}
      </Container>
    </QueryClientProvider>
    // </AppContext.Provider>
  );
}

export default App;
