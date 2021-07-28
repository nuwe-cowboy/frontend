import React from "react";
import { StyledButton } from "./MainButton.styled";

export function MainButton({
  children,
  style = {},
  onPress,
  secondary = false,
}) {
  return (
    <StyledButton onPress={onPress} style={style} secondary={secondary}>
      {children}
    </StyledButton>
  );
}
