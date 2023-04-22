import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute } from './routes';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import { RootState, useAppDispatch, useAppSelector } from '@store/store';
import {
  handleCloseLogin,
  handleCloseRegister,
  handleCloseResetPassword,
  handleOpenLogin,
  handleOpenRegister,
  handleOpenResetPassword,
} from '@store/slices/statusSlice';
import { LoginForm } from '@components/LoginForm';
import { RegisterForm } from '@components/RegisterForm';
import { ForgotPasswordForm } from '@components/ForgotPasswordForm';

const App = () => {
  const { openLogin, openRegister, openResetPassword } = useAppSelector(
    (state: RootState) => state.status
  );
  const dispatch = useAppDispatch();
  const onOpenLogin = () => {
    dispatch(handleOpenLogin());
  };
  const onCloseLogin = () => {
    dispatch(handleCloseLogin());
  };
  const onOpenRegister = () => {
    dispatch(handleOpenRegister());
  };
  const onCloseRegister = () => {
    dispatch(handleCloseRegister());
  };
  const onOpenResetPassword = () => {
    dispatch(handleOpenResetPassword());
  };
  const onCloseResetPassword = () => {
    dispatch(handleCloseResetPassword());
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainRoute />
      <LoginForm
        open={openLogin}
        handleOpen={onOpenLogin}
        handleClose={onCloseLogin}
      />
      <RegisterForm
        open={openRegister}
        handleOpen={onOpenRegister}
        handleClose={onCloseRegister}
      />
      <ForgotPasswordForm
        open={openResetPassword}
        handleOpen={onOpenResetPassword}
        handleClose={onCloseResetPassword}
      />
    </BrowserRouter>
  );
};

export default App;
