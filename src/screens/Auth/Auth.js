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
} from "./Auth.styled";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn, signUp, unRequestAuth } = useUserActions();
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthBg>
      <AuthContainer>
        <TouchableOpacity
          onPress={() => unRequestAuth()}
          style={{ position: "absolute", top: -20, right: -30 }}
        >
          <Text style={{ fontSize: 24 }}>X</Text>
        </TouchableOpacity>
        <HeaderText>
          {isLogin ? "Acceso de usuario" : "Registro de usuario"}
        </HeaderText>
        <AuthFormContainer>
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
        </AuthFormContainer>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={{ textAlign: "center", marginTop: 6, fontSize: "16px" }}>
            {isLogin
              ? "No tengo cuenta, ir al registro"
              : "Ya tengo cuenta, acceder"}
          </Text>
        </TouchableOpacity>
        <AuthButton onPress={() => signIn()}>acceder</AuthButton>
      </AuthContainer>
    </AuthBg>
  );
}

function FormFragment({ label, placeholder, value, onChangeText }) {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
      <AuthInput
        placeholder={placeholder}
        value={value}
        onChangeText={(t) => onChangeText(t)}
      />
    </View>
  );
}
