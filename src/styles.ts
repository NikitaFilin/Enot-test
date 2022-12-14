import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CONTAINER_COLOR_BACKGROUND, CARD_COLOR_TEXT } from "./constants";

export const Container = styled.div({
  height: "100vh",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  color: CARD_COLOR_TEXT,
  backgroundColor: CONTAINER_COLOR_BACKGROUND,

  overflowX: "hidden",
});

export const ToDoTitle = styled(Typography, {
  shouldForwardProp: (props) => props !== "$isDone",
})<{ $isDone: boolean }>(({ $isDone }) => ({
  fontWeight: 600,
  fontSize: "24px",
  textDecoration: $isDone ? "line-through" : "none",
}));
