import styled from "@emotion/styled";

export const NewsFeedContainer = styled.div({
  width: "100%",
  height: "30px",

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
