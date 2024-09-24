import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    email: string | null;
    fullname: string | null;
  } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Handle login request
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Handle successful login
    loginSuccess: (state, action: PayloadAction<{ email: string; fullname: string }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // Handle failed login
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Handle logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export the action creators
export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
