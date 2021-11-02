import { FETCH_EXCOS } from '../types';

const initialState = {
  excos: [],
  scheduleOfficers: [],
  communityManagers: []
};

const excos = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_EXCOS:
    return { ...state, excos: action.payload.executives, scheduleOfficers: action.payload.schedule_officers, communityManagers: action.payload.community_managers };
  default:
    return state;
  }
};

export default excos;
