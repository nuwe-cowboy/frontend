import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";

import App from "./App";
import { UserProvider, ContentProvider } from "./src/context";

export default function Index() {
  return (
    <UserProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </UserProvider>
  );
}

registerRootComponent(Index);
