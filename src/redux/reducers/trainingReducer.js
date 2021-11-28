import { FETCH_TRAININGS, FETCH_TRAINING } from '../types';

const initialState = {
  trainings: [],
  training: {}
};

const trianings = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_TRAININGS:

    return { ...state, trainings: action.payload.data };
  case FETCH_TRAINING: 
    return { ...state, training: action.payload };
  default:
    return state;
  }
};

export default trianings;
