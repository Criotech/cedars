import { STOP_LOADING, IS_LOADING } from '../types';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
  case IS_LOADING:
    return { ...state, loading: true };
  case STOP_LOADING:
    return { ...state, loading: false };
  default:
    return state;
  }
};

export default loadingReducer;
