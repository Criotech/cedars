
// import moment from 'moment';
import {
  FETCH_TRAININGS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, success, clear } from './alertActions';
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
      dispatch(clear());
    }
  }
};


export const addTraining = (data) => async dispatch =>  {
  dispatch(startLoading());
  // let status = data.status===true?1:0;
  
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('overview', data.overview);
    formData.append('live_video', data.live_video);
    // formData.append('start_time', moment(data.start_time).format('YYYY-MM-DD, h:mm:ss'));
    formData.append('start_time', '2021-12-31 16:30:00');
    formData.append('tutor', data.tutor);
    // formData.append('status', status);
    for (let i = 0; i < data.myFiles.length; i++) {
      formData.append(`resources[${i}][attachment]`, data.myFiles[i]);
    }

    const resp = await ApiService.addTraining(formData);
  
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

export const updateTraining = (data, id) => async dispatch =>  {
  dispatch(startLoading());
  // let status = data.status===true?1:0;
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('overview', data.overview);
    formData.append('live_video', data.live_video);
    // formData.append('start_time', moment(data.start_time).format('YYYY-MM-DD, h:mm:ss'));
    formData.append('start_time', '2021-12-31 16:30:00');
    formData.append('tutor', data.tutor);
    // formData.append('status', status);
    for (let i = 0; i < data.myFiles.length; i++) {
      formData.append(`resources[${i}][attachment]`, data.myFiles[i]);
    }

    const resp = await ApiService.updateTraining(formData, id);
  
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

export const deleteTraining = (id) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.deleteTraining(id);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(fetchTrainings());
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