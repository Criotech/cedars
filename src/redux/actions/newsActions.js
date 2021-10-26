import {
  FETCH_NEWS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
    
export const fetchNews = () => async dispatch => {
  dispatch(startLoading());
    
  try {
    const resp = await ApiService.fetchNews();
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_NEWS, payload: resp.data.data });
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
  