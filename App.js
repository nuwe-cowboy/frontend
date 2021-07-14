import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("alex")}>
        <Text>Alex</Text>
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
