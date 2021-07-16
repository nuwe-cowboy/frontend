import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { useUserActions } from "../../context/UserContext";
import {
  AuthButton,
  AuthContainer,
  AuthInput,
  AuthLogo,
  HeaderText,
} from "./Auth.styled";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn } = useUserActions();
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthContainer>
      <View style={{ flex: 1 }}>
        <AuthLogo source={require("../../assets/logo_wide.png")} />
      </View>
      <View style={{ flex: 5 }}>
        <HeaderText>
          {isLogin ? "Haz login en la app" : "Regístrate en la app"}
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
          label="Mail"
          placeholder="Introduce tu mail"
          value={mail}
          onChangeText={setMail}
        />
        <FormFragment
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <AuthButton onPress={() => signIn()}>
        <Text>Hacer login falso</Text>
      </AuthButton>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text>
          {isLogin
            ? "No tengo cuenta, ir a registro"
            : "Ya tengo cuenta, ir a login"}
        </Text>
      </TouchableOpacity>
    </AuthContainer>
  );
}

function FormFragment({ label, placeholder, value, onChangeText }) {
  return (
    <>
      <Text>{label}</Text>
      <AuthInput
        placeholder={placeholder}
        value={value}
        onChangeText={(t) => onChangeText(t)}
      />
    </>
  );
}
