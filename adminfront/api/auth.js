import req from './request';

export const loginReq = (login, password) => req.post('/auth/login', {login, password});
