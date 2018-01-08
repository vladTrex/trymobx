
export const searchProjectByTitle = (projects, title) => projects.reduce((result, project) => {
    if(project.title === title) { result.push(project) };
    return result;
}, []);