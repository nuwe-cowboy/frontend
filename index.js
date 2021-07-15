import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";

import App from "./App";
import { UserProvider } from "./src/context/UserContext";

export default function Index() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

registerRootComponent(Index);
