import { SagaIterator } from 'redux-saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import trackApi from '../../api/trackApi';
import { listTrackFromSaga } from './tracksSlice';
export function* fetchTrack(action: PayloadAction<string>): SagaIterator<void> {
  try {
    const id = action.payload;
    const res = yield call(trackApi.getListTrack, id);
    console.log('worker function track run');
    yield put({
      type: listTrackFromSaga.type,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
}
