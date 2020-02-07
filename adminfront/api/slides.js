import {authReq, request} from './request';

const mainUrl = '/slides';

export const create = async ({ slide, token }) => {
  return await authReq(token).post(mainUrl, slide);
};

export const getAll = async (slider, page, count) => {
  return await request.get(mainUrl + `/${slider}`, {params: { page, count }});
};

export const getOne = async (id) => {
  return await request.get(mainUrl + `/slide/${id}`);
};

export const update = async ({id, slide, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...slide});
};

export const del = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
