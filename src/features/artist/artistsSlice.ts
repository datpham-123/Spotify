import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
interface ArtistState {
  artists: Artist[];
  loading: boolean;
}

const initialState: ArtistState = {
  artists: [] as Artist[],
  loading: false,
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    listArtist: (state) => {
      console.log('reducer run, list artist method');
      state.loading = true;
    },
    listArtistFromSaga: (state, action) => {
      console.log('reducer run, list artist from saga method');
      state.loading = false;
      state.artists = action.payload.artists.items;
    },
  },
});

// actions
export const { listArtist, listArtistFromSaga } = artistSlice.actions;

// selector
export const selectArtist = (state: RootState) => state.artists.artists;
export const selectLoading = (state: RootState) => state.artists.loading;

export default artistSlice.reducer;
