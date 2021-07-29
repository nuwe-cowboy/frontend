import React from "react";
import { StyledCard } from "./NCard.styled";

export function NCard({ children, style = {} }) {
  return <StyledCard style={style}>{children}</StyledCard>;
}
