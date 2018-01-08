import React, { Component } from "react";
import {
  View,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { inject } from "mobx-react";
import { NavigationActions } from "react-navigation";

import { login } from "../services/api";
import authService from "../services/authService";
import { HOME_SCREEN } from '../constants/navigation';

@inject("userStore")
export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    user: "",
    password: "",
    error: false
  };

  async submit() {
    const { userStore } = this.props;
    const { user, password } = this.state;

    try {
      await userStore.login(user, password);
      this.clearAndNavigate(HOME_SCREEN);
    } catch ({ message }) {
      this.setState({
        error: message
      });
    }
  }

  clearAndNavigate() {
    this.setState({
      user: "",
      password: ""
    });

    Keyboard.dismiss();
    authService.isAuthenticated = true;
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: HOME_SCREEN })]
      })
    );
  }

  clearValidationErrors() {
    this.setState({
      error: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={textInput => (this._user = textInput)}
          style={styles.inputField}
          value={this.state.text}
          onChangeText={user => this.setState({ user })}
          onSubmitEditing={event => this._password.focus()}
          onFocus={() => this.clearValidationErrors()}
          editable={true}
          maxLength={40}
          multiline={false}
          underlineColorAndroid="transparent"
          placeholder="Email"
        />
        <TextInput
          ref={textInput => (this._password = textInput)}
          style={styles.inputField}
          value={this.state.text}
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={event => this.submit()}
          editable={true}
          secureTextEntry={true}
          maxLength={40}
          multiline={false}
          underlineColorAndroid="transparent"
          placeholder="Password"
        />
        {this.state.error && (
          <View style={styles.validationErrors}>
            <Text style={styles.error}>{this.state.error}</Text>
          </View>
        )}
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.submit()}> 
        <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  inputField: {
    marginTop: 20,
    alignSelf: "center",
    height: 55,
    width: "80%",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#CACACA"
  },
  loginBtn: {
    backgroundColor: '#1e6c99',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10
  },
  loginText: {
    color: 'white',
    textAlign: 'center'
  },
  validationErrors: {
    flexDirection: "row",
    justifyContent: "center"
  },
  error: {
    marginTop: 10,
    textAlign: "center",
    color: "red"
  }
});
