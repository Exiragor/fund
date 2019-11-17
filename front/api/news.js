import {request} from './request';

const mainUrl = '/news';

export const getNews = async ({ page, count }) => {
  return await request.get(mainUrl, {params: { page, count }});
};

export const getOneNews = async (id) => {
  return await request.get(mainUrl + `/${id}`);
};
