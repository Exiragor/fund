import {request} from './request';

const mainUrl = '/payment';

export const create = async (amount) => {
  return await request.get(mainUrl + '/create', {params: {amount}});
};

export const getInfo = async (id) => {
  return await request.get(mainUrl + '/info', {params: {id}});
};
