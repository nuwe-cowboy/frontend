import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { getEventsAbstract } from "../../helpers";
import { Theme } from "../../helpers/Theme";
import { EventText, EventTitle } from "../Events/Events.styled";
import { NCard } from "../NuweComponents";
import {} from "./EventCard.styled.js";

export function EventCard({
  title = "",
  abstract = "",
  uri = "",
  idx = 0,
  setSelected = 0,
}) {
  return (
    <NCard>
      <View>
        <EventTitle>{title}</EventTitle>
      </View>
      <EventText numberOfLines={3}>{abstract}</EventText>
      <TouchableOpacity onPress={() => setSelected(idx)}>
        <Text
          style={{
            color: Theme.primary,
            textAlign: "right",
            paddingTop: "1rem",
          }}
        >
         Leer más
        </Text>
      </TouchableOpacity>
    </NCard>
  );
}