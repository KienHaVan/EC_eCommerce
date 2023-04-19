import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StatusStateType {
  openLogin: boolean;
  openRegister: boolean;
}

const initialState: StatusStateType = {
  openLogin: false,
  openRegister: false,
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
  },
});

export const { handleOpenLogin, handleCloseLogin } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
