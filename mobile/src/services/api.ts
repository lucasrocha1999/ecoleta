import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.50.50.4:3333'
});

export default api;