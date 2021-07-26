import React from "react";
import { Text } from "react-native";
import { useUserActions } from "../../context";
import { MainContainer } from "./Newsletter.styled";

export const Newsletter = () => {
  const { logOff } = useUserActions();
  return (
    <MainContainer>
      <Text>Newsletter</Text>
    </MainContainer>
  );
};
