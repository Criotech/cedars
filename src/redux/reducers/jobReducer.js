import { FETCH_JOBS } from '../types';

const initialState = {
  jobs: []
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_JOBS:

    return { ...state, jobs: action.payload.data };
  default:
    return state;
  }
};

export default jobs;
