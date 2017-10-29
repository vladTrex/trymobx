import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { useStrict } from "mobx";
import store from "./store";
import { observer, Provider, inject } from "mobx-react";

import { routes } from './config/routes';

useStrict(true);

const AppNavigator = StackNavigator(routes);

const App = () => (
  <Provider {...store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent("trymobx", () => App);
