import axios from 'axios'

const host = process.env.API_URL || 'http://localhost:8000';

export const request = axios.create({
  baseURL: `${host}/`
});

export const authReq = (token) => axios.create({
  baseURL: `${host}/`,
  headers: {
    Authorization: 'Bearer ' + token
  }
});

export default request;
