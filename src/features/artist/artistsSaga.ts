import { call, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import artistApi from '../../api/artistApi';
import { listArtistFromSaga } from './artistsSlice';

export function* fetchArtist(
  action: PayloadAction<string>
): SagaIterator<void> {
  try {
    const query = action.payload;
    const res = yield call(artistApi.getListArtist, query);
    console.log('worker function artist run ');
    console.log(res);
    yield put({
      type: listArtistFromSaga.type,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
}
