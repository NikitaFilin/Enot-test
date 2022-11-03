import styled from "@emotion/styled";
import { NEWS_HEIGHT } from "../../constants";

export const NewsFeedContainer = styled.div({
  width: "100%",
  height: NEWS_HEIGHT,

  animation: "animMarqueeRtl 30s linear infinite",
});

export const News = styled.div({
  "@-webkit-keyframes animMarqueeRtl": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
});
