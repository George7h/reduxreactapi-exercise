import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/users/userSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;