import React from "react";
import theme from "./src/constants/theme";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation/Navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

import { store } from "./src/redux/reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
