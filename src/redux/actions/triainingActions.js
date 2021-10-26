import {
  FETCH_TRAININGS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
  
export const fetchTrainings = () => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchTrainings();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_TRAININGS, payload: resp.data.data });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error') {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
    }
  }
};
