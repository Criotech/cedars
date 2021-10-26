import axios from 'axios';

const baseUrl = 'https://dodeel.douglasokolaa.codes';

axios.defaults.baseURL = baseUrl;

const apiInstance = axios.create();


apiInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default apiInstance;