import React from "react";

import { Indicator } from "./styles";

interface IToDoIndicator {
  color: string;
  index?: number;
}

export const ToDoIndicator: React.FC<IToDoIndicator> = ({ color, index }) => (
  <Indicator $color={color} $cardIndex={index} />
);
