import {authReq, request} from './request';

const mainUrl = '/projects';

export const create = async ({ item, token }) => {
  return await authReq(token).post(mainUrl, item);
};

export const getAll = async (category) => {
  return await request.get(mainUrl + `/category/${category}`);
};

export const getOne = async (id) => {
  return await request.get(mainUrl + `/${id}`);
};

export const update = async ({id, item, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...item});
};

export const del = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
