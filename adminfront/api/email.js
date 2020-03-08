import {authReq, request} from './request';

const mainUrl = '/email';

export const create = async ({ value }) => {
  return await request.post(mainUrl, {value});
};

export const getAll = async ({ page, count, token }) => {
  return await authReq(token).get(mainUrl, {params: { page, count }});
};

export const getOne = async (id) => {
  return await authReq(token).get(mainUrl + `/${id}`);
};

export const update = async ({id, email, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...email});
};

export const del = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
