import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { when } from "mobx";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput
} from "react-native";

// observer
// observable
// computed
// when
// action
// useStrict(true)

const Message = ({ item }) => (
  <View style={styles.message}>
    <Text>{item}</Text>
  </View>
);

@inject("projectStore")
@observer
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Mobx is great!"
  };

  state = {
    project: ""
  };

  addProject() {
    const { projectStore, navigation } = this.props;
    const { project } = this.state;

    projectStore.addProject(project);
    navigation.navigate('Project');
  }
  render() {
    const { projectStore } = this.props;

    return (
      <View style={styles.container}>
        <Text>Mobx. Scalable state managment.</Text>
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
