import styled from "@emotion/styled";
import { CARD_COLOR_BACKGROUND, CARD_COLOR_TEXT } from "../../constants";

import { Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const ToDoListContainer = styled.div({
  width: "390px",
  // maxHeight: "80vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  margin: "32px 16px",
  borderRadius: "30px",

  backgroundColor: CARD_COLOR_BACKGROUND,

  // overflowY: "auto",
  // overflowX: "hidden",
});

export const ToDoListContainerTitle = styled.div({
  width: "350px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ToDoListTitle = styled(Typography)({
  fontSize: "48px",
});

export const SettingsIcon = styled(Settings)({
  color: CARD_COLOR_TEXT,
});
