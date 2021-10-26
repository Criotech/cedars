import { SUCCESS, ERROR, CLEAR } from '../types';


function success(message) {
  return { type: SUCCESS, message };
}

function getError(message) {
  return { type: ERROR, message };
}

function clear() {
  return { type: CLEAR };
}

export {
  success,
  getError,
  clear
};