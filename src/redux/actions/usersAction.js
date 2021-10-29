import {
  FETCH_PROSPECTS,
  FETCH_CM,
  FETCH_SINGLE_CM,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
    
export const fetchProspects = () => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchProspects();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_PROSPECTS, payload: resp.data.data });
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

export const fetchCM = (page, per_page) => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchCM(page, per_page);
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_CM, payload: resp.data.data });
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

export const approvePCMs = (pcmIds, approved) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.approvePCMs({ids: pcmIds, status: approved});
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(clear());
      dispatch(fetchProspects());
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

export const getSingleUser = (id) => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.getSingleUser(id);
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_SINGLE_CM, payload: resp.data.data });
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

export const addUser = (data) => async dispatch =>  {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.addUser(data);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
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

export const toggleActiveUser = (data) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.toggleActiveUser(data);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(getSingleUser(data.id));
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
