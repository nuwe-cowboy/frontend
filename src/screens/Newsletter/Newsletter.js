import React, { useEffect } from "react";
import { Newsletters } from "../../components";
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
      <Newsletters data={newsletterList} />
    </MainContainer>
  );
};
