import axios from 'axios';
import {gethost} from '../helpers';

const host = gethost();

export const request = axios.create({
  baseURL: `${host}/`
});

export const authReq = (token) => axios.create({
  baseURL: `${host}/private/`,
  headers: {
    Authorization: token
  }
});

export default request;
