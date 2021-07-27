import styled from "styled-components/native";
import { Theme } from "../../helpers";

export const NavContainer = styled.View`
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  background: #fff;
  z-index: 100;
  border-top-width: 1px;
  border-color: ${Theme.primary};
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LabelItemMenu = styled.Text`
  color: ${Theme.secondary};
`;
