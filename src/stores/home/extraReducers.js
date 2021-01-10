import { fetchUsers } from './thunks';

const fetchUserHandler = {
  [fetchUsers.pending]: (state) => {
    state.loading = true;
  },
  [fetchUsers.fulfilled]: (state, action) => {
    state.users = action.payload;
    state.loading = false;
  },
  [fetchUsers.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

export default {
  ...fetchUserHandler,
};