import {
  SET_USER,
  LOGOUT_USER,
} from '../types';
import ApiService from '../../utils/apiService';
import { getError, clear } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';

export const setCurrentUser = user => dispatch => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch({ type: SET_USER, payload: user });
};

export const loginUser = (email, password) => async dispatch => {
  dispatch(startLoading());

  try {
    const resp = await ApiService.loginAccount({email, password});

    if (resp) {
      dispatch(stopLoading());

      localStorage.setItem('token', resp.data.data.api_token);
      return dispatch(setCurrentUser(resp.data.data));
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

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
};
