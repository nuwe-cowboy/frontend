import styled from "styled-components/native";
import { Theme } from "../../helpers/Theme";

export const AuthContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const AuthLogo = styled.Image`
  width: 163px;
  height: 54px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const AuthInput = styled.TextInput`
  width: 100%;
  height: 30px;
  padding: 4px;
  border-width: 1px;
  border-radius: 3px;
`;

export const AuthButton = styled.TouchableOpacity`
  width: 100%;
  background: ${Theme.primary};
  border-width: 2px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border-color: ${Theme.secondary};
`;
