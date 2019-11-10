import {authReq, request} from './request';

const mainUrl = '/news';

export const createNews = async ({ news, token }) => {
  return await authReq(token).post(mainUrl, news);
};

export const getNews = async ({ page, count }) => {
  return await request.get(mainUrl, { page, count })
}
