import axios from 'axios'

const host = process.env.API_URL || 'http://localhost:8000';

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
