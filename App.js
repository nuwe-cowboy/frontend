import React from "react";
import { StatusBar } from "expo-status-bar";

import { useUserActions, useUserState } from "./src/context/UserContext";
import { Auth, Events } from "./src/screens";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const { loggedIn } = useUserState();
  const { logOff } = useUserActions();
  return (
    <View style={styles.container}>
      <Text>Alex</Text>
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
