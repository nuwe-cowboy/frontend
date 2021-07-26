import styled from "styled-components/native";
import { Theme } from "../../helpers/Theme";

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 1rem 0;
`;

export const EventCard = styled.View`
  padding: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 5px;
  background: ${Theme.background};
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

export const EventActionBtn = styled.TouchableOpacity`
  width: 120px;
  border-width: 2px;
  padding: 6px 15px;
  border-radius: 5px;
  ${(props) =>
    props.adder
      ? `
      background: #81C153;
      border-color: #68AC38;
    `
      : `background: ${Theme.primary};
         border-color: ${Theme.secondary};`}
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
