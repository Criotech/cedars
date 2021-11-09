import moment from 'moment';
import {
  FETCH_JOBS,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';

export const addJob = (data) => async dispatch => {
  dispatch(startLoading());

  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('closing_date', moment(data.closing_date).format('YYYY-MM-DD'));
    formData.append('location', data.location);
    formData.append('type', data.type);
    formData.append('apply_link', data.apply_link);
    formData.append('rate', data.rate);
    formData.append('role', data.role);

    // formData.append('perks', data.perks);
    for (let i = 0; i < data.perks.length; i++) {
      formData.append('perks[]', data.perks[i]);
    }
    formData.append('employer_name', data.employer_name);
    formData.append('employer_location', data.employer_location);
    formData.append('employer_email', data.employer_email);
    formData.append('employer_logo', data.image);

    const resp = await ApiService.addJob(formData);

    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(clear());
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error' || error.response.status === 500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

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
    if (error.message === 'Network Error' || error.response.status === 500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const updateJob = (data, id) => async dispatch =>  {
  dispatch(startLoading());
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('closing_date', moment(data.closing_date).format('YYYY-MM-DD'));
    formData.append('location', data.location);
    formData.append('type', data.type);
    formData.append('apply_link', data.apply_link);
    formData.append('rate', data.rate);
    formData.append('role', data.role);

    // formData.append('perks', data.perks);
    for (let i = 0; i < data.perks.length; i++) {
      formData.append('perks[]', data.perks[i]);
    }
    formData.append('employer_name', data.employer_name);
    formData.append('employer_location', data.employer_location);
    formData.append('employer_email', data.employer_email);
    formData.append('employer_logo', data.image);

    const resp = await ApiService.updateJob(formData, id);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(clear());
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error'||error.response.status===500) {
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
    if (error.message === 'Network Error' || error.response.status === 500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};
