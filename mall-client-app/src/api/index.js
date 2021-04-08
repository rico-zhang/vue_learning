import axios from 'axios';
import baseURL, { URLS } from './URLS';

const appkey = 'rico_1615382028243';

const request = axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(URLS.getSide, {
  params: { type },
});
const getGoodsList = (type, page, size, sort) => request.get(URLS.getGoodsList, {
  params: {
    type, size, sort, page,
  },
});
export default {
  getSideList,
  getGoodsList,
};
