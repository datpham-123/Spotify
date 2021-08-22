import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const TOKEN =
  'BQCT5t6dwEp3Qjhguj1T1xY6vd-af7tSi1UYu8cqz_UnhIx8Zs3VWFdi_q_SEXdAQWQjic3qH7nx8vgqe7JLk7t2Cn6o2NQrtANfdCvXovVXJm9iIhuZVLTWKxAr4ZElkGNj3eBRwRwpLCwiyh-hwOoTYhIe6eg';

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
