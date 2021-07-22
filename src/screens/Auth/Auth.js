import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { useUserActions } from "../../context/UserContext";
import {
  AuthButton,
  AuthContainer,
  AuthInput,
  AuthLogo,
  HeaderText,
  LogoContainer,
  AuthFormContainer,
  TextButton,
} from "./Auth.styled";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn } = useUserActions();
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AuthContainer>
        <LogoContainer style={{ flex: 1 }}>
          <AuthLogo source={require("../../assets/logo_wide.png")} />
        </LogoContainer>
        <AuthFormContainer style={{ flex: 5 }}>
          <HeaderText>
            {isLogin ? "Acceso de usuario" : "Registro de usuario"}
          </HeaderText>
          {!isLogin && (
            <>
              <FormFragment
                label="Nombre"
                placeholder="Introduce tu nombre"
                value={surname}
                onChangeText={setSurame}
              />
              <FormFragment
                label="Apellidos"
                placeholder="Introduce tus apellidos"
                value={name}
                onChangeText={setName}
              />
            </>
          )}
          <FormFragment
            label="Correo electrónico"
            placeholder="Introduce tu email"
            value={mail}
            onChangeText={setMail}
          />
          <FormFragment
            label="Contraseña"
            placeholder="Introduce tu contraseña"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={{ textAlign: "center", marginTop: 6 }}>
              {isLogin
                ? "No tengo cuenta, ir al registro"
                : "Ya tengo cuenta, acceder"}
            </Text>
          </TouchableOpacity>
          <AuthButton onPress={() => signIn()}>
            <TextButton>acceder</TextButton>
          </AuthButton>
        </AuthFormContainer>
      </AuthContainer>
      <MainMenu></MainMenu>
    </>
  );
}

function FormFragment({ label, placeholder, value, onChangeText }) {
  return (
    <>
      <Text style={{ paddingBottom: 6 }}>{label}</Text>
      <AuthInput
        placeholder={placeholder}
        value={value}
        onChangeText={(t) => onChangeText(t)}
      />
    </>
  );
}
