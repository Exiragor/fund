const host = process.env.API_URL || process.env.apiUrl || 'https://xn--80aap3adkp6cxd.xn--p1ai/server';
export const gethost = () => host;
export const getImgUrlById = (id) => host + `/files/${id}`;
export const getImgUrlByIdWithParams = (id, {width, height}) => host + `/files/${id}/${width}/${height}`;
