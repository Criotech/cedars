import apiInstance from './apiInstance';

class APIServices {
  async loginAccount(data) {
    return await apiInstance.post('/auth/login', data);
  }

  async fetchAuthUser () {
    return apiInstance.get('/auth/profile');
  }

  async fetchTrainings() {
    return await apiInstance.get('/trainings');
  }

  async fetchProjects () {
    return await apiInstance.get('/projects');
  }

  async fetchJobs() {
    return await apiInstance.get('/jobs');
  }

  async fetchNews () {
    return await apiInstance.get('/news');
  }


}

const instance = new APIServices();

export default instance;