import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LabelItemMenu, NavContainer } from "./MainMenu.styled";

export function MainMenu() {
  return (
    <NavContainer>
      <ItemMenu label="Eventos" />
      <ItemMenu label="Mis eventos" />
      <ItemMenu label="Newsletters" />
    </NavContainer>
  );
}

function ItemMenu(props) {
  return (
    <TouchableOpacity>
      <LabelItemMenu>{props.label}</LabelItemMenu>
    </TouchableOpacity>
  );
}
