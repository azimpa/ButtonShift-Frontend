import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/axios';

const API_URL = import.meta.env.VITE_APP_BASE_URL;

export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const response = await instance.post(`${API_URL}boards/login/`, credentials);
    return response.data;
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData) => {
    const response = await instance.post(`${API_URL}boards/signup/`, userData);
    return response.data;
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    await instance.post(`${API_URL}boards/logout/`);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = 'idle';
      });
  },
});

export default authSlice.reducer;