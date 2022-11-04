import { Alert as MuiAlert } from "@mui/material";
import styled from "@emotion/styled";

export const NewsFeedContainer = styled.div({
  width: "100%",
  height: "30px",

  animation: "animMarqueeRtl 30s linear infinite",
});

export const News = styled.div({
  whiteSpace: "nowrap",

  "@-webkit-keyframes animMarqueeRtl": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
});

export const Alert = styled(MuiAlert)({
  position: "absolute",
  left: 0,
  bottom: 0,

  margin: "8px",
});
