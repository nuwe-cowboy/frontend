import styled from "styled-components/native";
import { Theme } from "../../../helpers";

export const StyledButton = styled.TouchableOpacity`
  width: 120px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  padding: 6px 15px;
  border-radius: 5px;
  background: ${(props) => (props.secondary ? Theme.secondary : Theme.primary)};
  border-color: ${(props) =>
    props.secondary ? Theme.secondaryDark : Theme.primaryDark};
`;
