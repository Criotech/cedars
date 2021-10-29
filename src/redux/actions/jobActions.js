import {
  FETCH_JOBS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
      
export const fetchJobs = () => async dispatch => {
  dispatch(startLoading());
      
  try {
    const resp = await ApiService.fetchJobs();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_JOBS, payload: resp.data.data });
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

export const deleteJob = (id) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.deleteJob(id);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(fetchJobs());
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
    