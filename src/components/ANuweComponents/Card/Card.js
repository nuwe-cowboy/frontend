import React from "react";
import { StyledCard } from "./Card.styled";

export function Card({ children, style = {} }) {
  return <StyledCard style={style}>{children}</StyledCard>;
}
