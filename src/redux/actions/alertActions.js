import { SUCCESS, ERROR, CLEAR } from '../types';


export const success = (message) => dispatch => {
  dispatch({ type: SUCCESS, message });
};

export const getError = (message) => dispatch => {
  dispatch({ type: ERROR, message });
};

export const clear = () => dispatch => {
  dispatch({ type: CLEAR });
};
