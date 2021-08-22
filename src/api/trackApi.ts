import axiosClient from './axiosClient';

const trackApi = {
  getListTrack: function (id: string) {
    return axiosClient.get(`/v1/artists/${id}/top-tracks`, {
      params: {
        country: 'US',
      },
    });
  },
};

export default trackApi;
