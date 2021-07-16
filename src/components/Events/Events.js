import React from "react";
import { Text, View } from "react-native";

export function Events() {
  return (
    <View>
      <Text>Lista de eventos de una</Text>
      {[1, 2, 3].map((i) => {
        return <Text key={i}>Evento {i}</Text>;
      })}
    </View>
  );
}
