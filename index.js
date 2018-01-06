import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { useStrict } from "mobx";
import store from "./store";
import { observer, Provider, inject } from "mobx-react";

import { routes } from "./config/routes";
import { initApi } from "./services/api";

// useStrict(true);

const AppNavigator = StackNavigator(routes, {
  initialRouteName: "Login"
});

initApi();

const App = () => (
  <Provider {...store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent("trymobx", () => App);
