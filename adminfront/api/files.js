import {authReq} from './request';

export const uploadFile = async (token, file) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await authReq(token).post('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  const host = process.env.API_URL || 'http://localhost:8000';

  return host + `/files/${data}`
}
