import {
  FETCH_PROJECTS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
  
export const fetchProjects = () => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.fetchProjects();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_PROJECTS, payload: resp.data.data });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error' || error.response.status===500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const deleteProject = (id) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.deleteProject(id);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(fetchProjects());
      dispatch(clear());
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error' || error.response.status===500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};