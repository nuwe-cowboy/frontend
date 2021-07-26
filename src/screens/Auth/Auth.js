import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useUserActions } from "../../context";
import {
  AuthBg,
  AuthButton,
  AuthContainer,
  AuthInput,
  HeaderText,
  AuthFormContainer,
  TextButton,
} from "./Auth.styled";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn, signUp, unRequestAuth } = useUserActions();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthBg>
      <AuthContainer>
        <TouchableOpacity onPress={() => unRequestAuth()}>
          <Text>X</Text>
        </TouchableOpacity>
        <AuthFormContainer style={{ flex: 5 }}>
          <HeaderText>
            {isLogin ? "Acceso de usuario" : "Registro de usuario"}
          </HeaderText>
          {!isLogin && (
            <>
              <FormFragment
                label="Nombre"
                placeholder="Introduce tu nombre"
                value={name}
                onChangeText={setName}
              />
              <FormFragment
                label="Apellidos"
                placeholder="Introduce tus apellidos"
                value={lastName}
                onChangeText={setLastName}
              />
            </>
          )}
          <FormFragment
            label="Correo electrónico"
            placeholder="Introduce tu email"
            value={email}
            onChangeText={setEmail}
          />
          <FormFragment
            label="Contraseña"
            placeholder="Introduce tu contraseña"
            value={password}
            onChangeText={setPassword}
          />
        </AuthFormContainer>
        <View style={{ flex: 1, width: "100%" }}>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={{ textAlign: "center", marginTop: 6 }}>
              {isLogin
                ? "No tengo cuenta, ir al registro"
                : "Ya tengo cuenta, acceder"}
            </Text>
          </TouchableOpacity>
          <AuthButton
            onPress={() =>
              isLogin ? signIn() : signUp(name, lastName, password, email)
            }
          >
            <TextButton>acceder</TextButton>
          </AuthButton>
        </View>
      </AuthContainer>
    </AuthBg>
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
