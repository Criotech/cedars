import { SUCCESS, ERROR, CLEAR } from '../types';

const alert = (state = {}, action) => {
  switch (action.type) {
  case SUCCESS:
    return {
      type: 'alert-success',
      success: action.message
    };
  case ERROR:
    return {
      type: 'alert-danger',
      message: action.message
    };
  case CLEAR:
    return {};
  default:
    return state;
  }
};

export default alert;