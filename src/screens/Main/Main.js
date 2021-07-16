import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Events } from "../../components";
import { useUserActions } from "../../context/UserContext";

export const Main = () => {
  const { logOff } = useUserActions();
  return (
    <View>
      <Text>Main</Text>
      <Events />
      <TouchableOpacity onPress={() => logOff()}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};
