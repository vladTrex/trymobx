import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  Platform
} from "react-native";

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  }
};
