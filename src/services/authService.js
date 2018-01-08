import React from "react";
import Splash from "../components/Splash";
import { NavigationActions } from "react-navigation";

class AuthService {
  _isAuthenticated = false;

  set isAuthenticated(bool) {
    this._isAuthenticated = bool;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

}

const authService = new AuthService(false);

export default authService;
