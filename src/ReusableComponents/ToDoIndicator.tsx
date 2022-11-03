import React from "react";

import { Indicator } from "./styles";

interface IToDoIndicator {
  color: string;
}

export const ToDoIndicator: React.FC<IToDoIndicator> = ({ color }) => (
  <Indicator $color={color} />
);
