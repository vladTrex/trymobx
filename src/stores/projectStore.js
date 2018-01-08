import { observable, action, computed } from 'mobx';
import { times, random } from 'lodash';
import { postProject } from '../services/api';

export default class ProjectStore {

    @observable
    projects = []

    @action
    addProject(project){
      this.projects.push(project)
      postProject({project})
    }

    @action async fetchAll(){
      
    }

}