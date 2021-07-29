import styled from "styled-components/native";
import { Theme } from "../../../helpers";

export const StyledCard = styled.View`
  padding: 1rem;
  min-width: 400px;
  max-width: 600px;
  margin: 0.5rem;
  border-radius: 5px;
  flex-grow: 1;
  background: ${Theme.background};
`;
