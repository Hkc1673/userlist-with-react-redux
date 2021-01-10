import { createAsyncThunk } from '@reduxjs/toolkit';
import { homeServices } from '../../services';

export const fetchUsers = createAsyncThunk(
  'home/fetchUsers',
  async () => {
    const { data } = await homeServices.fetchUsers();
    return data;
  },
);