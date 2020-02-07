import {authReq} from './request';
import {gethost} from '../helpers/index';

export const uploadFile = async (token, file) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await authReq(token).post('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  const host = gethost();

  return { url: host + `/files/${data.id}`, id: data.id, file: data };
};
