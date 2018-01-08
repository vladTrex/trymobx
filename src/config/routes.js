import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from "../screens/Home";
import ProjectListScreen from "../screens/ProjectList";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

export const routes = {
  Home: {
    screen: Home
  },
  ProjectList: { screen: ProjectListScreen },
  Login: { screen: Login }
};