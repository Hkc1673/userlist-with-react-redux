import { createSlice } from '@reduxjs/toolkit';
import reducers from './reducers';
import extraReducers from './extraReducers';

const initialState = {
  loading: true,
  users: [],
  error: {},
};

const appSlice = createSlice({
  name: 'home',
  initialState,
  reducers,
  extraReducers,
});

export const { toggleLoading } = appSlice.actions;

export default appSlice.reducer;