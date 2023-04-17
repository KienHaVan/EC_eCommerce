import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { UserType } from './types';

interface initialState {
  user: UserType;
  deviceId: string;
  accessToken: string;
  refreshToken: string;
}

const initialState = {
  user: null,
  deviceId: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      return action.payload;
    },
    logOut: (state) => {
      return initialState;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.auth.accessToken;
export const selectCurrentRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
