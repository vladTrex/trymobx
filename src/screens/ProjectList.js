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

import ProjectList from '../components/ProjectList'

@inject("projectStore")
@observer
export default class ProjectListScreen extends Component {
  static navigationOptions = {
    title: "Mobx is great!"
  };

  render() {
    return (
      <View>
        <ProjectList projects={this.props.projectStore.projects} />
      </View>
    );
  }
}
