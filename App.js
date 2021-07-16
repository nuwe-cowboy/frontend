import React from "react";
import { StatusBar } from "expo-status-bar";

import { View } from "react-native";
import { useUserState } from "./src/context/UserContext";
import { Auth, Main } from "./src/screens";

export default function App() {
  const { loggedIn } = useUserState();
  return (
    <View style={{ height: "100vh", width: "100vw" }}>
      {loggedIn ? <Main /> : <Auth />}
      <StatusBar style="auto" />
    </View>
  );
}
