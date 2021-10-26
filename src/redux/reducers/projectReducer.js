import { FETCH_PROJECTS } from '../types';

const initialState = {
  projects: []
};

const projects = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROJECTS:

    return { ...state, projects: action.payload.data };
  default:
    return state;
  }
};

export default projects;
