import styled from "styled-components/native";
import { Theme } from "../../helpers/Theme";

export const AuthContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
`;

export const AuthLogo = styled.Image`
  width: 163px;
  height: 54px;
`;

export const LogoContainer = styled.View`
  padding-top: 2rem;
`;

export const AuthFormContainer = styled.View`
  width: 100%;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1rem;
`;

export const AuthInput = styled.TextInput`
  width: 100%;
  height: 35px;
  padding: 4px;
  border-width: 0.5px;
  border-radius: 5px;
  margin-bottom: 6px;
  border-color: #b5b5b5;
`;

export const AuthButton = styled.TouchableOpacity`
  width: 100%;
  background: ${Theme.primary};
  border-width: 2px;
  padding: 10px;
  border-radius: 5px;
  border-color: ${Theme.secondary};
  bottom: 15%;
  position: absolute;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
  font-variant: small-caps;
  font-weight: 600;
`;
