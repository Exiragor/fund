import {request} from './request';

const mainUrl = '/payment';

export const create = async () => {
  return await request.get(mainUrl + '/create', {params: {amount: 100}});
};
