import { observable, action, computed } from 'mobx';
import { times, random } from 'lodash';
import { postProject } from '../services/api';

export default class ProjectStore {

    @observable
    projects = []

    @action
    addProject(project){
      postProject({id: `ID_${new Date().getUTCMilliseconds()}`, title: project})
    }

}