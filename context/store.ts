import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});
