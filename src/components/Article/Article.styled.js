import styled from "styled-components/native";
import { Theme } from "../../helpers";

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 1rem 0;
`;

export const EventText = styled.Text`
  font-size: 12px;
`;

export const EventTitle = styled(EventText)`
  font-weight: bold;
  font-size: 13px;
`;

export const EventGoal = styled(EventText)`
  font-weight: lighter;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
  font-variant: small-caps;
  font-weight: 600;
  font-size: 12px;
`;

export const EventProgress = styled.View`
  padding: 5px 0;
`;

export const EventUserStateContainer = styled.View`
  padding-top: 1rem;
`;
