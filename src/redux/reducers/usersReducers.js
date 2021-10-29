import { FETCH_PROSPECTS, FETCH_CM, FETCH_SINGLE_CM } from '../types';

const initialState = {
  pcms: [],
  cms: [],
  cm: {}
};

const users = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROSPECTS:
    return { ...state, pcms: action.payload.data };
  case FETCH_CM:
    return { ...state, cms: action.payload.data };
  case FETCH_SINGLE_CM: 
    return { ...state, cm: action.payload };
  default:
    return state;
  }
};


export default users;
