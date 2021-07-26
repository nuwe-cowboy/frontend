import React from "react";
import { Newsletters } from "../../components";
import { useUserActions } from "../../context";
import { MainContainer } from "./Newsletter.styled";

export const Newsletter = () => {
  const { logOff } = useUserActions();
  return (
    <MainContainer>
      <Newsletters />
    </MainContainer>
  );
};
