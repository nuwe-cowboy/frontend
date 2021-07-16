import React from "react";
import { StatusBar } from "expo-status-bar";

import { useUserActions, useUserState } from "./src/context/UserContext";
import { Auth } from "./src/screens";
import { Events } from "./src/components";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const { loggedIn } = useUserState();
  const { logOff } = useUserActions();
  return (
    <View>
      {loggedIn ? (
        <>
          <Events />
          <TouchableOpacity onPress={() => logOff()}>
            <Text>Salir</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Auth />
      )}

      <StatusBar style="auto" />
    </View>
  );
}
