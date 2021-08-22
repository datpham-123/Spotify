import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import artistsReducer from '../features/artist/artistsSlice';
import tracksReducer from '../features/track/tracksSlice';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    tracks: tracksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // mount it to the store
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
