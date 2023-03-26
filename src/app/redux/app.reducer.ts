import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '@/auth/redux/auth.slice';

const AppReducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export default AppReducers;
