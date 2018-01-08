import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { useStrict } from "mobx";
import { observer, Provider, inject } from "mobx-react";

import { routes } from "./src/config/routes";
import { initApi } from "./src/services/api";
import store from "./src/store";
import { LOGIN_SCREEN } from './src/constants/navigation';

useStrict(true);

const AppNavigator = StackNavigator(routes, {
  initialRouteName: LOGIN_SCREEN
});

initApi();

const App = () => (
  <Provider {...store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent("trymobx", () => App);
