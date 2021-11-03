import {
  FETCH_EXCOS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
        
export const fetchExcos = (stateCode) => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchStateExcos(stateCode);
    console.log(resp.data.data);
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_EXCOS, payload: resp.data.data });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error') {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const postExcos = (data) => async dispatch => {
  dispatch(startLoading());

  try {
    const resp = await ApiService.postStateExcos(data);
      
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(fetchExcos(data.stateCode));
      dispatch(clear());
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error') {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};
  
      