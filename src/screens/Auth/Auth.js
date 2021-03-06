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
  AuthButtonText,
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
        <TouchableOpacity
          onPress={() => unRequestAuth()}
          style={{ position: "absolute", top: 10, right: 15 }}
        >
          <Text style={{ fontSize: 24 }}>X</Text>
        </TouchableOpacity>
        <HeaderText>
          {isLogin ? "Acceso de usuario" : "Registro de usuario"}
        </HeaderText>
        <AuthFormContainer>
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
          <AuthButtonText>acceder</AuthButtonText>
        </AuthButton>
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
