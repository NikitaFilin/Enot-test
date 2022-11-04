import React from "react";
import { News, NewsFeedContainer, Alert } from "./styles";

import { useQuery } from "react-query";
import { getNews } from "../../api/hooks";

export const NewsFeed = () => {
  const { status, data } = useQuery("news", getNews);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    <Alert severity="error">Fetch Error</Alert>;
  }

  return (
    <NewsFeedContainer>
      <News>{data}</News>
    </NewsFeedContainer>
  );
};
