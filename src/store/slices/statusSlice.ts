import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StatusStateType {
  globalLoading: boolean;
  openLogin: boolean;
  openRegister: boolean;
  openResetPassword: boolean;
}

const initialState: StatusStateType = {
  globalLoading: false,
  openLogin: false,
  openRegister: false,
  openResetPassword: false,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    handleOpenLogin: (state) => {
      state.openLogin = true;
    },
    handleCloseLogin: (state) => {
      state.openLogin = false;
    },
    handleOpenRegister: (state) => {
      state.openRegister = true;
    },
    handleCloseRegister: (state) => {
      state.openRegister = false;
    },
    handleOpenResetPassword: (state) => {
      state.openResetPassword = true;
    },
    handleCloseResetPassword: (state) => {
      state.openResetPassword = false;
    },
  },
});

export const {
  handleOpenLogin,
  handleCloseLogin,
  handleOpenRegister,
  handleCloseRegister,
  handleOpenResetPassword,
  handleCloseResetPassword,
} = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
