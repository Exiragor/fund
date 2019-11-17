import {request} from './request';

const mainUrl = '/content';

export const getAll = async ({ page, count }) => {
  return await request.get(mainUrl, {params: { page, count }});
};

export const getOne = async (alias) => {
  return await request.get(mainUrl + `/${alias}`);
};
