import axios from 'axios';
import history from '../history'

// PROJECT ACTION TYPES
const INIT_PROJECTS = 'INIT_PROJECTS';
const CREATE_PROJECT = 'CREATE_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

// PROJECT ACTION CREATORS
const initProjects = projects => ({ type: INIT_PROJECTS, projects});
const createProject = project => ({ type: CREATE_PROJECT, project });
const editProject = project => ({ type: EDIT_PROJECT, project});
const deleteProject = id => ({ type: DELETE_PROJECT, id });

// PROJECT REDUCER
export default function reducer(projects = [], action) {
  switch (action.type) {

    case INIT_PROJECTS:
      return action.projects;

    case CREATE_PROJECT:
      return [...projects, action.project];

    case EDIT_PROJECT:
      return projects.map(project => (
        project.id === action.project.id ? action.project : project
      ));

    case DELETE_PROJECT:
      return projects.filter(project => project.id !== action.id);

    default:
      return projects;
  }
}

// PROJECTS THUNK CREATORS
export const fetchProjects = () => dispatch => {
  axios.get('/api/projects')
    .then(res => dispatch(initProjects(res.data)))
    .catch(err => console.error('Error fetching projects!', err));
}

export const addProject = project => dispatch => {
  console.log(project)
  axios.post('/api/projects', project)
    .then(res => {
      dispatch(createProject(res.data))
      window.location.href = `/projects`
    })
    .catch(err => console.error(`Error adding project: ${project}`, err));
}


export const updateProject = project => dispatch => {
  axios.put(`/api/projects/${project.id}`, project)
    .then(res => {
      dispatch(editProject(res.data))
      history.push(`/projects/${project.id}`)
    })
    .catch(err => console.error(`Error updating project: ${project}`, err));
}


export const removeProject = id => dispatch => {
  dispatch(deleteProject(id));
  axios.delete(`/api/projects/${id}`)
    .catch(err => console.error(`Error deleting project: ${id}!`, err));
}
