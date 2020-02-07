import {authReq, request} from './request';

const mainUrl = '/feedback';

export const create = async ({ feedback }) => {
  return await request.post(mainUrl, feedback);
};

export const getAll = async ({ page, count, token }) => {
  return await authReq(token).get(mainUrl, {params: { page, count }});
};

export const getOne = async (id) => {
  return await authReq(token).get(mainUrl + `/${id}`);
};

export const update = async ({id, feedback, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...slide});
};

export const del = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
