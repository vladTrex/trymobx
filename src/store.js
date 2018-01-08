import ProjectStore from './stores/projectStore';
import UserStore from './stores/userStore';

export default {
  projectStore: new ProjectStore(),
  userStore: new UserStore()
}
