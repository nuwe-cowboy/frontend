import styled from "styled-components/native";
import { Theme } from "../../../helpers";

export const StyledButton = styled.TouchableOpacity`
  width: 120px;
  border-width: 2px;
  padding: 6px 15px;
  border-radius: 5px;
  background: ${(props) => (props.secondary ? Theme.secondary : Theme.primary)};
  border-color: ${(props) =>
    props.secondary ? Theme.secondaryDark : Theme.primaryDark};
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
  font-variant: small-caps;
  font-weight: 600;
  font-size: 12px;
`;
