import styled from "@emotion/styled";

export const Indicator = styled("div")<{ $color: string }>(({ $color }) => ({
  width: "5px",
  height: "40px",

  marginRight: "11px",

  borderRadius: "3px",
  backgroundColor: `${$color}`,
}));
