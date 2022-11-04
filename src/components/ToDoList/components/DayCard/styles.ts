import styled from "@emotion/styled";

import IconButton from "@mui/material/IconButton";
import { CARD_COLOR_BACKGROUND, CARD_COLOR_TEXT } from "../../../../constants";

export const Card = styled.div({
  width: "350px",
  height: "79px",

  display: "flex",
  alignItems: "center",

  margin: "16px 0px",

  borderRadius: "25px",
  backgroundColor: CARD_COLOR_BACKGROUND,
  boxShadow:
    "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
});

export const CardTitleWrapper = styled.div({
  display: "flex",
});

export const CardContent = styled.div({
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "14px 29px 14px 14px",
});

export const ExpandButton = styled(IconButton)({
  width: "21px",
  height: "21px",

  backgroundColor: CARD_COLOR_TEXT,

  ":hover": {
    color: CARD_COLOR_TEXT,
  },
});

export const ToDoCardContainer = styled.div({
  // minHeight: "200px",
  width: "350px",

  padding: "8px 0px",
  borderRadius: "40px",

  backgroundColor: CARD_COLOR_BACKGROUND,
  boxShadow:
    "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
});
