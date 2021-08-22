import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const TOKEN =
  'BQDvPCnfmBtjhYVYWxkymty8bI56plMN0MVL5fMV4DFqteO2uyNztKs3JZFu_h3iTKSPuaTaPi5WXDDgE1C6HbTkwtXPLaaSwhOhuGhPv1cug10pdcE6HZ2E612xG27fCwMIIFFpfXqxCrOyA5Q7yVHz-xDLk_E';

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
