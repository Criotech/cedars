import { STOP_LOADING, IS_LOADING } from '../types';


const startLoading = () => dispatch => {
  dispatch({ type: IS_LOADING });
};

const stopLoading = () => dispatch => {
  dispatch({ type: STOP_LOADING });
};


export {
  startLoading,
  stopLoading
};