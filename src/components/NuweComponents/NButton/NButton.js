import React from "react";
import { StyledButton } from "./NButton.styled";

export function NButton({ children, style = {}, onPress, secondary = false }) {
  return (
    <StyledButton onPress={onPress} style={style} secondary={secondary}>
      {children}
    </StyledButton>
  );
}
