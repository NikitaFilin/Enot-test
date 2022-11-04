import styled from "@emotion/styled";
import {
  INDICATOR_COLOR_RED,
  INDICATOR_COLOR_BLUE,
  INDICATOR_COLOR_YELLOW,
} from "../../constants";

const getCardIndicatorColor = ($color: string, $index?: number) => {
  if (!$index) {
    return $color;
  } else {
    switch ($index) {
      case 1:
        return INDICATOR_COLOR_RED;
      case 2:
        return INDICATOR_COLOR_BLUE;
      case 3:
        return INDICATOR_COLOR_YELLOW;
      default:
        return INDICATOR_COLOR_RED;
    }
  }
};

export const Indicator = styled("div")<{ $color: string; $cardIndex?: number }>(
  ({ $color, $cardIndex }) => ({
    width: "5px",
    height: "40px",

    marginRight: "11px",

    borderRadius: "3px",
    backgroundColor: `${getCardIndicatorColor($color, $cardIndex)}`,
  })
);

export const DialogContainer = styled.div({
  minWidth: "400px",
  minHeight: "100px",

  padding: "8px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
});
