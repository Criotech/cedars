import apiInstance from './apiInstance';

class APIServices {
  async loginAccount(data) {
    return await apiInstance.post('/auth/login', data);
  }

  async fetchAuthUser () {
    return apiInstance.get('/auth/profile');
  }

  async fetchTrainings() {
    return await apiInstance.get('/trainings?order=desc');
  }

  async fetchTraining (id) {
    return await apiInstance.get(`/trainings/${id}`);
  }

  async fetchProjects () {
    return await apiInstance.get('/projects?order=desc');
  }

  async fetchJobs() {
    return await apiInstance.get('/jobs?order=desc');
  }

  async fetchNews () {
    return await apiInstance.get('/news?order=desc');
  }

  async fetchProspects(page, per_page, searchText) {
    if (searchText) {
      return await apiInstance.get(`/prospects?&search=${searchText}&order=desc`);
    } else {
      return await apiInstance.get(`/prospects?page=${page===undefined?1:page}&per_page=${per_page===undefined?15:per_page}&order=desc`);
    }
  }

  async fetchCM(page, per_page, searchText) {
    if (searchText) {
      return await apiInstance.get(`/users?&search=${searchText}&order=desc`);
    } else {
      return await apiInstance.get(`/users?page=${page===undefined?1:page}&per_page=${per_page===undefined?15:per_page}&order=desc`);
    }
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

  async updateNews(data, id) {
    return await apiInstance.post(`/news/${id}?_method=PATCH`, data);
  }

  async addJob(data) {
    return await apiInstance.post('/jobs', data);
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

  async updateJob(data, id) {
    return await apiInstance.post(`/jobs/${id}?_method=PATCH`, data);
  }

  async updateTraining(data, id) {
    return await apiInstance.post(`/trainings/${id}?_method=PATCH`, data);
  }
  
  async fetchProject(id) {
    return await apiInstance.get(`/projects/${id}`);
  }

  async updateProject(data, id) {
    return await apiInstance.post(`/projects/${id}?_method=PATCH`, data);
  }

  async fetchStateExcos(stateCode) {
    return await apiInstance.get(`/states/${stateCode}/members`);
  }

  async postStateExcos(data) {
    let stateCode = data.state_code;
    return await apiInstance.post(`/states/${stateCode}/members`, data);
  }

  async verifyABusiness(data, businessId) {
    return await apiInstance.patch(`/businesses/${businessId}`, data);
  }

  async createAnnoucement(data) {
    return await apiInstance.post('/announcements', data);
  }

  async fetchAnnoucements() {
    return await apiInstance.get('/announcements');
  }

  async addResources(data) {
    return await apiInstance.post('/resources', data);
  }

  async deleteResource(id) {
    return await apiInstance.delete(`/resources/${id}`);
  }
}

const instance = new APIServices();

export default instance;