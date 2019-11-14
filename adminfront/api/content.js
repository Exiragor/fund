import {authReq, request} from './request';

const mainUrl = '/content';

export const create = async ({ content, token }) => {
  return await authReq(token).post(mainUrl, content);
};

export const getAll = async ({ page, count }) => {
  return await request.get(mainUrl, {params: { page, count }});
};

export const getOne = async (alias) => {
  return await request.get(mainUrl + `/${alias}`);
};

export const update = async ({id, item, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...item});
};

export const del = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
