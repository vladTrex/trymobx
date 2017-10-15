import React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { useStrict } from "mobx";
import store from "./store";
import HomeScreen from "./screens/Home";
import ProjectScreen from "./screens/Project";
import { observer, Provider, inject } from "mobx-react";

useStrict(true);

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Project: { screen: ProjectScreen }
});

const App = () => (
  <Provider {...store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent("trymobx", () => App);
