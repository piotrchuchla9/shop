import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const invalidateToken = async (token: string) => {
  const response = await axiosInstance.post('/logout', { token });
  return response.data;
};

export const checkToken = async (token: string) => {
  const response = await axiosInstance.post('/check-token', { token });
  return response.data;
};