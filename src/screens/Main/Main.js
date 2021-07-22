import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Events } from "../../components";
import { useUserActions } from "../../context/UserContext";
import { MainContainer } from "./Main.styled";

export const Main = () => {
  const { logOff } = useUserActions();
  return (
    <MainContainer>
      <Events />
      <TouchableOpacity onPress={() => logOff()}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </MainContainer>
  );
};
