import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { when } from "mobx";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Platform
} from "react-native";

import { getProjects } from "../services/api";

// observer
// observable
// computed
// when
// action
// useStrict(true)

@inject("projectStore")
@observer
class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    project: ""
  };

  componentWillMount() {
    const { projectStore } = this.props;

    getProjects(snapshot => {
      projectStore.projects = Object.values(snapshot.val());
    });
  }

  addProject() {
    const { projectStore, navigation } = this.props;
    const { project } = this.state;

    projectStore.addProject(project);
    navigation.navigate("ProjectList");
  }
  render() {
    const { projectStore } = this.props;

    return (
      <View style={[styles.container]}>
        <Text>Mobx. Scalable state managment. </Text>
        <TextInput
          value={this.state.project}
          onChangeText={project => this.setState({ project })}
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <Button title="Add Project" onPress={this.addProject.bind(this)} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  },
  input: {
    alignSelf: "stretch",
    borderColor: "grey",
    height: 40,
    borderWidth: 1,
    margin: 5
  },
  computedContainer: {
    flexDirection: "row"
  },
  message: {
    width: "70%",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "#979797",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10
  },
  backgroundImage: {
    width: "100%"
  }
});
