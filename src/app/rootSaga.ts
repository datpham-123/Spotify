import { takeEvery } from 'redux-saga/effects';
import { fetchArtist } from '../features/artist/artistsSaga';
import { listArtist } from '../features/artist/artistsSlice';
import { fetchTrack } from '../features/track/tracksSaga';
import { listTrack } from '../features/track/tracksSlice';

function* rootSaga() {
  yield takeEvery(listArtist.type, fetchArtist);
  yield takeEvery(listTrack.type, fetchTrack);
}

export default rootSaga;
