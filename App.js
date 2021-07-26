import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import { useUserState } from "./src/context/UserContext";
import { Auth, Main, Newsletter } from "./src/screens";
import { Header } from "./src/components";

const Tab = createBottomTabNavigator();

export default function App() {
  const { loggedIn, authRequested } = useUserState();
  return (
    <View style={{ height: "100vh", width: "100vw" }}>
      <Header />
      {authRequested && <Auth />}

      <NavigationContainer>
        <Tab.Navigator tabBarOptions={style.tabBarOptions}>
          <Tab.Screen name="Eventos" component={Main} />
          {loggedIn && <Tab.Screen name="Mis Eventos" component={Main} />}
          <Tab.Screen name="Newsletter" component={Newsletter} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const style = {
  tabBarOptions: {
    labelStyle: {
      marginBottom: 15,
      fontSize: 12,
    },
  },
};
