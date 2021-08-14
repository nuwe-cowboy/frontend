import React, { useEffect, useState }  from "react";
import { ScrollView, View, Text } from "react-native";
import { NCard, NButton, NGrid } from "../NuweComponents";
import { getEventsAbstract } from "../../helpers";
import { useContentActions, useContentState } from "../../context";
import { EventCard } from "../EventCard/EventCard";
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

import { data } from "../../helpers";
import { useUserActions, useUserState } from "../../context/UserContext";
import { Theme } from "../../helpers/Theme";

export function Events() {
  const { getEventsFromAPI } = useContentActions();
  const { eventList } = useContentState();
  const [selectedIndex, setSelectedIndex] = useState(false);

  useEffect(() => {
    !eventList && getEventsFromAPI();
  }, [eventList]);

  return (
      <ScrollView>
        <HeaderText>Eventos activos</HeaderText>
        {selectedIndex || selectedIndex === 0 ? (
          <Article
            setSelected={setSelectedIndex}
            article={eventList[selectedIndex]}
          ></Article>
        ) : (
          <NGrid>
            {eventList?.map((e, idx) => {
              return (
                <Event
                  setSelected={setSelectedIndex}
                  body={e.body}
                  key={e.id}
                  idx={idx}
                  title={e.title}
                  abstract={e.body}
                  goal={e.goal}
                  acum={e.acum}
                  description={e.description}
                  isParticipating={e.isParticipating}
                  dorsal="2354"
                />
              );
            })}
          </NGrid>
        )}
      </ScrollView>
  );
}

function Event(props) {
  return (
    <NCard>
      <EventData
        title={props.title}
        body={props.body}
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

function EventData({ title, goal, acum, body }) {
  return (
    <>
      <View style={Theme.flexView}>
        <EventTitle>{title}</EventTitle>
        <EventGoal>{goal} 3000 kms</EventGoal>
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
      <EventText>{body}</EventText>
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
