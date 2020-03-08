import {request} from './request';

const mainUrl = '/email';

export const create = async ({ email }) => {
  return await request.post(mainUrl, {value: email});
};
