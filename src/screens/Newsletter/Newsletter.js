import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { NewsletterCard, NText } from "../../components";
import {
  useUserActions,
  useContentActions,
  useContentState,
} from "../../context";
import { MainContainer } from "./Newsletter.styled";

export const Newsletter = () => {
  const { logOff } = useUserActions();
  const { getNewsletterList } = useContentActions();
  const { newsletterList } = useContentState();

  useEffect(() => {
    !newsletterList && getNewsletterList();
  }, [newsletterList]);

  return (
    <MainContainer>
      <ScrollView>
        <NText title>Newsletters</NText>
        {newsletterList?.map((e) => {
          return (
            <NewsletterCard
              key={e.id}
              title={e.title}
              abstract={"getNewsletterAbstract(e.body, 140)"}
            />
          );
        })}
      </ScrollView>
    </MainContainer>
  );
};
