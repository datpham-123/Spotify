import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const TOKEN =
  'BQDcG01GyvnUjQvPgKMZxhQzkXiZB7oW_JjqHbWad6G5f7UN1HWTAsC8ipV21fEDoSjQPvJPezrfezi4lW83-MlRLRk6_LFSxdIHIMF6jR83MoKc71tOic9SPSJZe4B5zmzekzMMeo6Jjt07HfsP5enDYShiskI';

const axiosClient = axios.create({
  baseURL: '	https://api.spotify.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + TOKEN,
  },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default axiosClient;
