import React from "react";
import { StyledText } from "./Typography.styled";

export function NText({
  style = {},
  children,
  title = false,
  subtitle = false,
}) {
  return (
    <StyledText style={style} title={title} subtitle={subtitle}>
      {children}
    </StyledText>
  );
}
