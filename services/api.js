import { signup, login, initialize, setListener } from './firebase';

export const initApi = () => initialize();

export {
  login,
  signup
}

export const getProjects = (updaterFn) => setListener('projects', updaterFn);

export const postProject = (project) => {
  if (Boolean(project)) {
    pushData('projects', {
      ...project
    })
  }
}