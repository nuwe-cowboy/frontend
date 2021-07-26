import styled from "styled-components/native";
import { Theme } from "../../helpers";

export const AuthBg = styled.View`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  flex: 1;
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.View`
  display: flex;
  align-items: center;
  background: ${Theme.background};
  width: 90%;
  border-radius: 15px;
  height: 80%;
  justify-content: space-around;
  padding: 0 1rem;
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
  border-color: ${Theme.borderInput};
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
