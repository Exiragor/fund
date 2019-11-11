import {authReq, request} from './request';

const mainUrl = '/news';

export const createNews = async ({ news, token }) => {
  return await authReq(token).post(mainUrl, news);
};

export const getNews = async ({ page, count }) => {
  return await request.get(mainUrl, {params: { page, count }});
};

export const getOneNews = async (id) => {
  return await request.get(mainUrl + `/${id}`);
};

export const updateNews = async ({id, news, token}) => {
  return await authReq(token).put(mainUrl + `/${id}`, {...news});
};

export const deleteNews = async ({id, token}) => {
  return await authReq(token).delete(mainUrl + `/${id}`);
};
