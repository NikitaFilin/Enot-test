import styled from "@emotion/styled";
import {
  CARD_COLOR_BACKGROUND,
  CARD_COLOR_TEXT,
  INDICATOR_COLOR_DEFAULT,
} from "../../constants";

import { Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const ToDoListContainer = styled.div({
  width: "390px",
  maxHeight: "90vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,

  margin: "32px 16px",
  borderRadius: "30px",

  backgroundColor: CARD_COLOR_BACKGROUND,

  overflowY: "auto",
  overflowX: "hidden",

  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    background: `${CARD_COLOR_TEXT}`,
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: `${INDICATOR_COLOR_DEFAULT}`,
    borderRadius: "20px",
    border: `3px solid ${CARD_COLOR_TEXT}`,
  },
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

export const DialogSwitchContainer = styled.div({
  display: "flex",
  alignItems: "center",
});
