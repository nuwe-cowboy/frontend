import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import data from "../../helpers/newsData";
import { Theme } from "../../helpers/Theme";
import {
  EventCard,
  EventText,
  EventTitle,
  HeaderText,
} from "../Events/Events.styled";
import {} from "./Newsletters.styled";

export function Newsletters() {
  return (
    <ScrollView>
      <HeaderText>Newsletters</HeaderText>
      {data.map((e) => {
        return (
          <Newsletter
            key={e.id}
            title={e.title}
            abstract={e.abstract}
            uri={e.uri}
          />
        );
      })}
    </ScrollView>
  );
}

function Newsletter(props) {
  return (
    <EventCard style={Theme.cardShadow}>
      <NewsletterData title={props.title} abstract={props.abstract} />
    </EventCard>
  );
}

function NewsletterData({ title, abstract, uri }) {
  return (
    <>
      <View>
        <EventTitle>{title}</EventTitle>
      </View>
      <EventText>{abstract}</EventText>
      <TouchableOpacity>
        <Text style={{ color: Theme.primary, textAlign: "right" }}>
          Leer más
        </Text>
      </TouchableOpacity>
    </>
  );
}
