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

  async fetchProspects(page, per_page) {
    return await apiInstance.get(`/prospects?page=${page}&per_page=${per_page}`);
  }

  async fetchCM(page, per_page) {
    return await apiInstance.get(`/users?page=${page}&per_page=${per_page}`);
  }

  async approvePCMs(data) {
    return await apiInstance.patch('/prospects', data);
  }

  async getSingleUser(id) {
    return await apiInstance.get(`/users/${id}`);
  }

  async addUser(data) {
    return await apiInstance.post('/users', data);
  }

  async addTraining(data) {
    return await apiInstance.post('/trainings', data);
  }

  async addNews(data) {
    return await apiInstance.post('/news', data);
  }

  async toggleActiveUser(data) {
    return await apiInstance.patch(`/users/${data.id}`, {status: data.status});
  }

  async deleteTraining (id) {
    return await apiInstance.delete(`/trainings/${id}`);
  }

  async deleteProject (id) {
    return await apiInstance.delete(`/projects/${id}`);
  }

  async deleteNews(id) {
    return await apiInstance.delete(`/news/${id}`);
  }

  async deleteJob(id) {
    return await apiInstance.delete(`/jobs/${id}`);
  }

  async updateTraining(data, id) {
    return await apiInstance.patch(`/trainings/${id}`, data);
  }
}

const instance = new APIServices();

export default instance;