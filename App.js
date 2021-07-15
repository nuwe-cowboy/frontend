import React from "react";
import { StatusBar } from "expo-status-bar";

import { useUserState } from "./src/context/UserContext";
import { Auth } from "./src/screens";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const { loggedIn } = useUserState();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("alex")}>
        <Text>Alex</Text>
        {loggedIn ? <Text>Logged In deuna</Text> : <Auth />}
      </TouchableOpacity>
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
