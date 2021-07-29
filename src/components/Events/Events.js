import React from "react";
import { ScrollView, View, Text } from "react-native";
import { NCard, NButton, NGrid } from "../NuweComponents";
import {
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
import { data } from "../../helpers";
import { useUserActions, useUserState } from "../../context/UserContext";
import { Theme } from "../../helpers/Theme";

export function Events() {
  return (
    <ScrollView>
      <HeaderText>Eventos activos</HeaderText>
      <NGrid>
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
      </NGrid>
    </ScrollView>
  );
}

function Event(props) {
  return (
    <NCard>
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
    </NCard>
  );
}

function EventData({ title, goal, acum, description }) {
  return (
    <>
      <View style={Theme.flexView}>
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
    <EventUserStateContainer style={Theme.flexView}>
      <Text>
        {isParticipating && (
          <>
            <EventText>
              ¡Gracias por participar!{"\n"}Dorsal número&nbsp;
            </EventText>
            <EventText style={{ fontWeight: "bold" }}>{dorsal}</EventText>
          </>
        )}
      </Text>

      <NButton
        secondary={isParticipating}
        onPress={() =>
          loggedIn
            ? console.log(isParticipating ? "Add kms" : "Get new dorsal")
            : requestAuth()
        }
      >
        <TextButton>{isParticipating ? "sumar kms" : "registrarme"}</TextButton>
      </NButton>
    </EventUserStateContainer>
  );
}
