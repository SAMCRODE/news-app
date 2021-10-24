import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import authReducer from './auth';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appReducer,
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
