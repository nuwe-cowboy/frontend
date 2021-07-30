import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { NewsletterCard, NGrid, NText, Article } from "../../components";
import { useContentActions, useContentState } from "../../context";
import { MainContainer } from "./Newsletter.styled";

export const Newsletter = () => {
  const { getNewsletterList } = useContentActions();
  const { newsletterList } = useContentState();
  const [selectedIndex, setSelectedIndex] = useState(false);

  useEffect(() => {
    !newsletterList && getNewsletterList();
  }, [newsletterList]);

  return (
    <MainContainer>
      <ScrollView>
        <NText title>Newsletters</NText>
        {selectedIndex || selectedIndex === 0 ? (
          <Article
            setSelected={setSelectedIndex}
            article={newsletterList[selectedIndex]}
          ></Article>
        ) : (
          <NGrid>
            {newsletterList?.map((e, idx) => {
              return (
                <NewsletterCard
                  setSelected={setSelectedIndex}
                  key={e.id}
                  idx={idx}
                  title={e.title}
                  abstract={e.body}
                />
              );
            })}
          </NGrid>
        )}
      </ScrollView>
    </MainContainer>
  );
};
