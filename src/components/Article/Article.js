import React from "react";
import { ScrollView } from "react-native";
import { NCard, NButton, NText } from "../NuweComponents";

export function Article({ setSelected, article }) {
  const { title, body } = article;
  return (
    <ScrollView>
      <NCard wide>
        <NButton onPress={() => setSelected(false)}>
          <NText style={{ color: "white" }}>Volver</NText>
        </NButton>
        <NText title>{title}</NText>
        <NText>{body}</NText>
        <NButton onPress={() => setSelected(false)}>
          <NText style={{ color: "white" }}>Volver</NText>
        </NButton>
      </NCard>
    </ScrollView>
  );
}
