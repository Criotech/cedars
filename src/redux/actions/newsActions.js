import {
  FETCH_NEWS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
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
      dispatch(clear());
    }
  }
};

export const addNews = (data) => async dispatch =>  {
  dispatch(startLoading());
  
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image);
    formData.append('category_id', 1);
    

    const resp = await ApiService.addNews(formData);
  
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

export const deleteNews = (id) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.deleteNews(id);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(fetchNews());
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