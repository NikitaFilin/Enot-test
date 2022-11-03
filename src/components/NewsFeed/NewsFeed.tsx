import React from "react";
import { News, NewsFeedContainer } from "./styles";

interface INewsFeed {
  news: string;
}

export const NewsFeed: React.FC<INewsFeed> = ({ news }) => {
  return (
    <NewsFeedContainer>
      <News>{news}</News>
    </NewsFeedContainer>
  );
};
