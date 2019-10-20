import {request} from './request';

export const loginReq = (login, password) => request.post('/auth/login', {login, password});
