import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import apiDataReducer from './apiDataSlice';

export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
