import React from "react";
import { Text } from "react-native";
import { useUserActions, useUserState } from "../../context/UserContext";
import { Logo, HeaderContainer } from "./Header.styled";

export function Header() {
  const { loggedIn } = useUserState();
  const { requestAuth, logOff } = useUserActions();
  return (
    <HeaderContainer>
      <Logo source={require("../../assets/logo_wide.png")} />
      <Text onPress={() => (loggedIn ? logOff() : requestAuth())}>
        {loggedIn ? "Salir" : "Acceder"}
      </Text>
    </HeaderContainer>
  );
}
