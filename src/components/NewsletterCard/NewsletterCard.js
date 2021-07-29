import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { getNewsletterAbstract } from "../../helpers";
import { Theme } from "../../helpers/Theme";
import { EventCard, EventText, EventTitle } from "../Events/Events.styled";
import { NCard } from "../NuweComponents";
import {} from "./NewsletterCard.styled";

export function NewsletterCard({ title = "", abstract = "", uri = "" }) {
  return (
    <NCard style={Theme.cardShadow}>
      <View>
        <EventTitle>{title}</EventTitle>
      </View>
      <EventText>{abstract}</EventText>
      <TouchableOpacity>
        <Text style={{ color: Theme.primary, textAlign: "right" }}>
          Leer más
        </Text>
      </TouchableOpacity>
    </NCard>
  );
}
