import ApiService from '../../utils/apiService';
import { getError, clear, success } from './alertActions';
import { startLoading, stopLoading } from './loadingAction';

// export const addTraining = (data) => async dispatch =>  {
//   dispatch(startLoading());
//   try {
//     const formData = new FormData();
//     formData.append('entity_id', data.entity_id);
//     formData.append('entity_type', data.entity_type);
//     for (let i = 0; i < data.myFiles.length; i++) {
//       formData.append(`resources[${i}][attachment]`, data.myFiles[i]);
//     }
  
//     const resp = await ApiService.addTraining(formData);
    
//     if (resp) {
//       dispatch(stopLoading());
//       dispatch(success(resp.data.message));
//       dispatch(clear());
//     }
//   } catch (error) {
//     dispatch(stopLoading());
//     if (error.message === 'Network Error'||error.response.status===500) {
//       dispatch(getError('Network Error'));
//       dispatch(clear());
//     } else {
//       dispatch(getError(error.response.data.error.message));
//       dispatch(clear());
//     }
//   }
// };
  
export const deleteResource = (id) => async dispatch => {
  dispatch(startLoading());
  
  try {
    const resp = await ApiService.deleteResource(id);
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