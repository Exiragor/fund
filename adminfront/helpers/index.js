const host = process.env.NODE_ENV == 'production' ? 'http://fundapi.exiragor.pw' : 'http://localhost:8000';
export const gethost = () => host;
export const getImgUrlById = (id) => host + `/files/${id}`;
export const getImgUrlByIdWithParams = (id, {width, height}) => host + `/files/${id}/${width}/${height}`;
