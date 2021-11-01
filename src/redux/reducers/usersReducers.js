import { FETCH_PROSPECTS, FETCH_CM, FETCH_SINGLE_CM } from '../types';

const initialState = {
  pcms: [],
  cms: [],
  cm: {},
  totalCMs: '',
  totalPCMs: ''
};

const users = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PROSPECTS:
    return { ...state, pcms: action.payload.data, totalPCMs: action.payload.total };
  case FETCH_CM:
    return { ...state, cms: action.payload.data, totalCMs: action.payload.total };
  case FETCH_SINGLE_CM: 
    return { ...state, cm: action.payload };
  default:
    return state;
  }
};


export default users;
