import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <Text>{isLogin ? "Haz login en la app" : "Regístrate en la app"}</Text>
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
