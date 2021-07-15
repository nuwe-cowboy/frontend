import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useUserActions } from "../../context/UserContext";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { signIn } = useUserActions();
  return (
    <View>
      <Text>{isLogin ? "Haz login en la app" : "Regístrate en la app"}</Text>
      <TouchableOpacity onPress={() => signIn()}>
        <Text>Hcer login falso</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text>
          {isLogin
            ? "Ya tengo cuenta, ir a login"
            : "No tengo cuenta, ir a registro"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
