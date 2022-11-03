import styled from "@emotion/styled";

export const Card = styled.div({
  width: "100%",

  display: "flex",
  alignItems: "center",

  borderRadius: "25px",
});

export const CardContent = styled.div({
  width: "100%",

  display: "flex",
  alignItems: "center",

  padding: "8px 29px 8px 18px",
});

export const CardContentTitle = styled.div({
  width: "250px",
});

export const ToDoDescription = styled.div({
  width: "100%",

  display: "inline-block",

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});
