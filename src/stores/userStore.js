import firebase from 'firebase';
import { action, observable } from 'mobx';

export default class User {
    @observable currentUser = '';

    @action logout(){
        firebase.auth().signOut();
    }

    @action login(username, password){
        return firebase.auth().signInWithEmailAndPassword(username, password)
        .then((resp) => this.currentUser = resp.email)
    }
}