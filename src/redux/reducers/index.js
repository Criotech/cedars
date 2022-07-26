import { combineReducers } from 'redux';
import auth from './authReducer';
import loadingReducer from './loadingReducer';
import alert from './alertReducer';
import trainingsReducer from './trainingReducer';
import projectsReducer from './projectReducer';
import jobsReducer from './jobReducer';
import newsReducer from './newsReducer';
import usersReducer from './usersReducers';
import excosReducer from './excosReducer';
import annoucementsReducer from './annoucementReducer';

export default combineReducers({
  auth,
  loadingReducer,
  alert,
  trainingsReducer,
  projectsReducer,
  jobsReducer,
  newsReducer,
  usersReducer,
  excosReducer,
  annoucementsReducer
});
