import { SET_USER, LOGOUT_USER } from '../types';

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

const initialState = {
  user: user ? user:{},
  isAuthenticated: token?true:false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return { ...state, user: action.payload, isAuthenticated: true };
  case LOGOUT_USER: 
    localStorage.setItem('token', '');
    return { ...state, isAuthenticated: false };
  default: 
    return state;
  }
};


export default auth;
