import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IAuthStore {
  auth_token: string;
  auth_loading: boolean;
}

const initialState: IAuthStore = {
  auth_token: '',
  auth_loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth_SET_LOADING: (state, actions: PayloadAction<boolean>): void => {
      state.auth_loading = actions.payload;
    },
    auth_SET_TOKEN: (state, actions: PayloadAction<string>): void => {
      state.auth_token = actions.payload;
    },
  },
});

export const {auth_SET_LOADING, auth_SET_TOKEN} = authSlice.actions;

export default authSlice;
