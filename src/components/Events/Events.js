import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  EventActionBtn,
  EventCard,
  EventGoal,
  EventTitle,
  HeaderText,
  TextButton,
  EventText,
  EventProgress,
  EventUserStateContainer,
} from "./Events.styled";
import * as Progress from "react-native-progress";

// mock event dataset
import data from "../../helpers/eventData";
import { useUserActions, useUserState } from "../../context/UserContext";

export function Events() {
  return (
    <ScrollView>
      <HeaderText>Eventos activos</HeaderText>
      {data.map((e) => {
        return (
          <Event
            key={e.id}
            title={e.title}
            goal={e.goal}
            acum={e.acum}
            description={e.description}
            isParticipating={e.isParticipating}
            dorsal={e.dorsal}
          />
        );
      })}
    </ScrollView>
  );
}

function Event(props) {
  return (
    <EventCard style={styles.cardShadow}>
      <EventData
        title={props.title}
        goal={props.goal}
        acum={props.acum}
        description={props.description}
      />
      <EventUserState
        isParticipating={props.isParticipating}
        dorsal={props.dorsal}
      />
    </EventCard>
  );
}

function EventData({ title, goal, acum, description }) {
  return (
    <>
      <View style={styles.flexView}>
        <EventTitle>{title}</EventTitle>
        <EventGoal>{goal} kms</EventGoal>
      </View>
      <EventProgress>
        <Progress.Bar
          progress={acum / goal}
          width={null}
          color={"#3CB2EE"}
          unfilledColor={"#E1E1E1"}
          borderColor={"#AEAEAE"}
          borderWidth={0}
        />
      </EventProgress>
      <EventText>{description}</EventText>
    </>
  );
}

function EventUserState({ isParticipating, dorsal }) {
  const { loggedIn } = useUserState();
  const { requestAuth } = useUserActions();
  return (
    <EventUserStateContainer style={styles.flexView}>
      <EventText>
        {isParticipating
          ? `¡Gracias por participar!\nDorsal número ${dorsal}`
          : ""}
      </EventText>

      {isParticipating ? (
        <EventActionBtn adder onPress={() => console.log("Add kms")}>
          <TextButton>sumar kms</TextButton>
        </EventActionBtn>
      ) : (
        <EventActionBtn
          onPress={() => {
            loggedIn ? console.log("Get new dorsal") : requestAuth();
          }}
        >
          <TextButton>registrarme</TextButton>
        </EventActionBtn>
      )}
    </EventUserStateContainer>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  flexView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
