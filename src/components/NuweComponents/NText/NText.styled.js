import styled from "styled-components/native";
import { Theme } from "../../../helpers";

export const StyledText = styled.Text`
  font-size: ${(props) =>
    props.title
      ? Theme.font.large
      : props.subtitle
      ? Theme.font.medium
      : Theme.font.small};
  ${(props) =>
    (props.title || props.subtitle) && "font-weight:  bold; padding: 1rem 0;"};
`;
