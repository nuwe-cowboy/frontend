import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useContentActions } from "../../context";
import { getNewsletterAbstract } from "../../helpers";
import { Theme } from "../../helpers/Theme";
import {
  EventCard,
  EventText,
  EventTitle,
  HeaderText,
} from "../Events/Events.styled";
import {} from "./Newsletters.styled";

export function Newsletters({ data = [] }) {
  return (
    <ScrollView>
      <HeaderText>Newsletters</HeaderText>
      {data?.map((e) => {
        return (
          <Newsletter
            key={e.id}
            title={e.title}
            abstract={getNewsletterAbstract(e.body, 140)}
            index={data.indexOf(e)}
          />
        );
      })}
    </ScrollView>
  );
}

function Newsletter({ title = "", abstract = "", index = null }) {
  const { getNewsletter } = useContentActions();
  return (
    <EventCard style={Theme.cardShadow}>
      <View>
        <EventTitle>{title}</EventTitle>
      </View>
      <EventText>{abstract}</EventText>
      <TouchableOpacity
        onPress={() => {
          getNewsletter(index);
        }}
      >
        <Text style={{ color: Theme.primary, textAlign: "right" }}>
          Leer más
        </Text>
      </TouchableOpacity>
    </EventCard>
  );
}
