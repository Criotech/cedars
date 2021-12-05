import {
  FETCH_PROSPECTS,
  FETCH_CM,
  FETCH_SINGLE_CM,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';
    
export const fetchProspects = (page, per_page, searchText, status) => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchProspects(page, per_page, searchText, status);
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_PROSPECTS, payload: resp.data.data });
    }
  } catch (error) {
    dispatch(stopLoading());
    if (error.message === 'Network Error' || error.response.status===500||error.response.status===500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const fetchCM = (page, per_page, searchText) => async dispatch => {
  dispatch(startLoading());
  try {
    const resp = await ApiService.fetchCM(page, per_page, searchText);
    if (resp) {
      dispatch(stopLoading());
      return dispatch({ type: FETCH_CM, payload: resp.data.data });
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
    if (error.message === 'Network Error' || error.response.status===500) {
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
    if (error.message === 'Network Error' || error.response.status===500) {
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
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('deployed_state', data.deployed_state);
    formData.append('nysc_state_code', data.nysc_state_code);
    formData.append('phone_number', data.phone_number);
    formData.append('nysc_call_up_number', data.nysc_call_up_number);
    formData.append('photo', data.photo);

    const resp = await ApiService.addUser(formData);
    
  
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
    if (error.message === 'Network Error' || error.response.status===500) {
      dispatch(getError('Network Error'));
      dispatch(clear());
    } else {
      dispatch(getError(error.response.data.error.message));
      dispatch(clear());
    }
  }
};

export const updateBusinessStatus = (data, businessId) => async dispatch=> {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.verifyABusiness({status: data.status}, businessId);
  
    if (resp) {
      dispatch(stopLoading());
      dispatch(success(resp.data.message));
      dispatch(getSingleUser(data.userId));
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

