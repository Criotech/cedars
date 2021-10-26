import { FETCH_TRAININGS } from '../types';

const initialState = {
  trainings: []
};

const trianings = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_TRAININGS:

    return { ...state, trainings: action.payload.data };
  default:
    return state;
  }
};

export default trianings;
