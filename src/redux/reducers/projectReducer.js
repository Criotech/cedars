import { FETCH_PROJECTS, FETCH_PROJECT } from '../types';

const initialState = {
  projects: [],
  project: {}
};

const projects = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROJECTS:
    return { ...state, projects: action.payload.data };
  case FETCH_PROJECT:
    return { ...state, project: action.payload };
  default:
    return state;
  }
};

export default projects;
