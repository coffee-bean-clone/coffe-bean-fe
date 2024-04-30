import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('Authorization');

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },

  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
