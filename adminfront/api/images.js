import {authReq} from './request';

export const uploadImage = async (token, file) => {
  const formData = new FormData();
  formData.append("image", file);
  const { data } = await authReq(token).post('/images', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  const host = process.env.API_URL || 'http://localhost:8000';

  return host + `/images/${data}`
}
