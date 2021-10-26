import { FETCH_NEWS } from '../types';

const initialState = {
  news: []
};

const news = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_NEWS:

    return { ...state, news: action.payload.data };
  default:
    return state;
  }
};

export default news;
