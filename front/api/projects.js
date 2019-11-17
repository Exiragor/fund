import {request} from './request';

const mainUrl = '/projects';

export const getAll = async (category) => {
  return await request.get(mainUrl + `/category/${category}`);
};

export const getOne = async (id) => {
  return await request.get(mainUrl + `/${id}`);
};
