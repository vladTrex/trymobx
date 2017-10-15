import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput
} from "react-native";

@inject("projectStore")
@observer
export default class ProjectScreen extends Component {
  static navigationOptions = {
    title: "Mobx is great!"
  };

  render() {
    return (
      <View>
        <Text>Project: {this.props.projectStore.projects.slice(-1)[0]}</Text>
      </View>
    );
  }
}
