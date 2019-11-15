const host = 'http://fundapi.exiragor.pw';
export const gethost = () => host;
export const getImgUrlById = (id) => host + `/files/${id}`;
export const getImgUrlByIdWithParams = (id, {width, height}) => host + `/files/${id}/${width}/${height}`;
