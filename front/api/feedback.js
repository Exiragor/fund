import {request} from './request';

const mainUrl = '/feedback';

export const create = async ({ feedback }) => {
  return await request.post(mainUrl, feedback);
};
