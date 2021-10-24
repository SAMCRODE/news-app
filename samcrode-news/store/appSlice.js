/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
  },
});

export const {
  setLoading,
} = appSlice.actions;

export default appSlice.reducer;
