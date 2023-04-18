import { UserType } from '@appTypes/auth.types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface initialState {
  user: UserType | null;
  deviceId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: initialState = {
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
export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.auth.accessToken;
export const selectCurrentRefreshToken = (state: RootState) =>
  state.auth.refreshToken;
export const selectCurrentDeviceId = (state: RootState) => state.auth.deviceId;
