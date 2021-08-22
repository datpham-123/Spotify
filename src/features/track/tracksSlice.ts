import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';
interface TracksState {
  tracks: Track[];
  loading: boolean;
}

const initialState: TracksState = {
  tracks: [] as Track[],
  loading: false,
};

const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    listTrack: (state) => {
      console.log('reducer run, list track method');
      state.loading = true;
    },
    listTrackFromSaga: (state, action) => {
      console.log('reducer run, list track from saga method');
      state.loading = false;
      state.tracks = action.payload.tracks;
    },
  },
});

// actions
export const { listTrack, listTrackFromSaga } = trackSlice.actions;

// selector
export const selectTrack = (state: RootState) => state.tracks.tracks;
export const selectLoading = (state: RootState) => state.tracks.loading;

export default trackSlice.reducer;
