import axiosClient from './axiosClient';

const artistApi = {
  getListArtist: function (query: string) {
    return axiosClient.get('/v1/search', {
      params: {
        q: query,
        type: 'artist',
      },
    });
  },
};

export default artistApi;
