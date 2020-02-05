import {request} from './request';

const mainUrl = '/slides';

export const getAll = async (slider) => {
  return await request.get(mainUrl + `/${slider}`);
};

export const getAllByPrefix = async (slider, prefix) => {
  return await request.get(mainUrl + `/${slider}/${prefix}`);
};

export const getOne = async (id) => {
  return await request.get(mainUrl + `/slide/${id}`);
};
