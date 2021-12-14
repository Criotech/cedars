import { FETCH_PROJECTS, FETCH_PROJECT, FETCH_BUSINESSES } from '../types';

const initialState = {
  projects: [],
  project: {},
  businesses: [],
  totalBusinesses: ''
};

const projects = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROJECTS:
    return { ...state, projects: action.payload.data };
  case FETCH_PROJECT:
    return { ...state, project: action.payload };
  case FETCH_BUSINESSES:
    return  { ...state, businesses: action.payload.data, totalBusinesses: action.payload.total };
  default:
    return state;
  }
};

export default projects;
