import styled from "@emotion/styled";

export const Indicator = styled("div")<{ $color: string }>(({ $color }) => ({
  width: "5px",
  height: "40px",

  marginRight: "11px",

  borderRadius: "3px",
  backgroundColor: `${$color}`,
}));

export const DialogContainer = styled.div({
  minWidth: "400px",
  minHeight: "100px",

  padding: "8px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
});
