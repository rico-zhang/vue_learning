import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((request) => {
  if (request.url.includes('/passport')) return request;
  const config = request;
  config.params = config.params || {};
  Object.assign(config.params, { appkey: store.state.user.appkey });
  return config;
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') return Promise.reject(response.data.msg);
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
