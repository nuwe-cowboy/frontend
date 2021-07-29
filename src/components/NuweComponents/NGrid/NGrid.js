import React from "react";
import { StyledGrid } from "./NGrid.styled";

export function NGrid({ children, style = {} }) {
  return <StyledGrid style={style}>{children}</StyledGrid>;
}
