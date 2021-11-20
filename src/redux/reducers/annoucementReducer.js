import { FETCH_ANNOUCEMENT } from '../types';

const initialState = {
  annoucements: []
};

const annoucements = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ANNOUCEMENT:

    return { ...state, annoucements: action.payload.data };
  default:
    return state;
  }
};

export default annoucements;
