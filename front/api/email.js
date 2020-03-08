import {request} from './request';

const mainUrl = '/email';

export const create = async ({ value }) => {
  return await request.post(mainUrl, {value});
};
