import * as firebase from "firebase";

export const initialize = () =>
  firebase.initializeApp({
    apiKey: "AIzaSyBmyseKSLhaYIlb4LviIO5iTKM_zMkHcOQ",
    authDomain: "reactauth-e500b.firebaseapp.com",
    databaseURL: "https://reactauth-e500b.firebaseio.com",
    projectId: "reactauth-e500b",
    storageBucket: "reactauth-e500b.appspot.com",
    messagingSenderId: "528543019324"
  });

export const setListener = (endpoint, updaterFn) => {
  firebase
    .database()
    .ref(endpoint)
    .on("value", updaterFn);
  return () =>
    firebase
      .database()
      .ref(endpoint)
      .off();
};

export const pushData = (endpoint, data) => {
  return firebase
    .database()
    .ref(endpoint)
    .push(data);
};

export const login = (email, pass) =>
  firebase.auth().signInWithEmailAndPassword(email, pass);

export const logout = () => firebase.auth().signOut();

export const signup = (email, pass) =>
  firebase.auth().createUserWithEmailAndPassword(email, pass);
