import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Update this with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/login', credentials);
  return response.data;
};
