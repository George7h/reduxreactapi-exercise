import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isloading: false,
  error: ''
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    return data.results; 
  } catch (error) {
    throw error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isloading = false;
        state.users = action.payload;
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isloading = false;
        state.users = []
        state.error = action.payload;
      });
  },
});

export const selectUsers = (state) => state.users.users;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;

export default usersSlice.reducer;