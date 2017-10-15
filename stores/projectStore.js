import { observable, action, computed } from 'mobx';
import { times, random } from 'lodash';

export default class ProjectStore {

    @observable
    projects = []

    @action
    addProject(project){
      this.projects.push(project)
    }

    // @computed
    // get fullName(){
    //     return `${this.firstName} ${this.lastName}`
    // }
}