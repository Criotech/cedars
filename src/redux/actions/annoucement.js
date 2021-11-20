import {
  FETCH_ANNOUCEMENT,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
      
export const fetchAnnoucements = () => async dispatch => {
  dispatch(startLoading());
      
  try {
    const resp = await ApiService.fetchAnnoucements();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_ANNOUCEMENT, payload: resp.data.data });
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
  
export const createAnnoucement = (data) => async dispatch =>  {
  dispatch(startLoading());
    
  try {
    
    const resp = await ApiService.createAnnoucement(data);
    
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
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
  