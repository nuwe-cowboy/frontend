import styled from "styled-components/native";
import { Theme } from "../../../helpers";

export const StyledCard = styled.View`
  padding: 1rem;
  ${(props) =>
    props.wide
      ? "width: 100%; max-width: 90vw;"
      : "min-width: 350px; max-width: 600px; flex: 1;"}
  margin: 0.5rem;
  border-radius: 5px;
  background: ${Theme.background};
  align-self: center;
  text-overflow: ellipsis;
`;
