import React, { useState } from "react";
import { NewsFeed } from "./components/NewsFeed";

import { ToDoList } from "./components/ToDoList";
import { Container } from "./styles";

function App() {
  const news =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere abadipisci delectus molestias vero consequatur iusto ex iure oditveritatis reprehenderit eos sunt, nisi eveniet natus vel facilis illout.";

  const [showNews, setShowNews] = useState(false);

  const handleShowNewsFeed = () => setShowNews(!showNews);
  return (
    <Container>
      <ToDoList handleShowNewsFeed={handleShowNewsFeed} />
      {showNews ? <NewsFeed news={news} /> : null}
    </Container>
  );
}

export default App;
