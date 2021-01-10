import axios from 'axios';

const request = axios.create({
  baseURL: '',
  withCredentials: false,
});

request.interceptors.request.use((config) => config);

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response),
);

export default request;