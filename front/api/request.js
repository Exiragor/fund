import axios from 'axios';
import {gethost} from '../helpers';

const host = gethost();

export const request = axios.create({
  baseURL: `${host}/`
});

export default request;
