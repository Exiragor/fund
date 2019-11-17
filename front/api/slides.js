import {request} from './request';

const mainUrl = '/slides';

export const getAll = async (slider) => {
  return await request.get(mainUrl + `/${slider}`);
};

export const getOne = async (id) => {
  return await request.get(mainUrl + `/slide/${id}`);
};
