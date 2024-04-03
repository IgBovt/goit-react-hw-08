import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const LogIn = createAsyncThunk('auth/login', async () => {});

export const LogOut = createAsyncThunk('auth/logout', async () => {});
