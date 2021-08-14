import React from "react";
import { Theme } from "../../../helpers";
import { StyledCard } from "./NCard.styled";

export function NCard({ children, style = {}, wide = false }) {
  return (
    <StyledCard style={{ ...Theme.cardShadow, style }} wide={wide}>
      {children}
    </StyledCard>
  );
}
