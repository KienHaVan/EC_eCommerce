import { Images } from '@assets/index';
import { AuthenModal } from '@components/AuthenModal';
import { CategoryBar } from '@components/CategoryBar';
import { ForgotPasswordForm } from '@components/ForgotPasswordForm';
import { LoginForm } from '@components/LoginForm';
import { RegisterForm } from '@components/RegisterForm';
import { useModal } from '@hooks/useModal';
import { Box, Button, Dialog, Modal, Slide, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  handleCloseLogin,
  handleCloseRegister,
  handleCloseResetPassword,
  handleOpenLogin,
  handleOpenRegister,
  handleOpenResetPassword,
} from '@store/slices/statusSlice';
import { RootState, useAppDispatch, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import React from 'react';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { openLogin, openRegister, openResetPassword } = useAppSelector(
    (state: RootState) => state.status
  );
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
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <CategoryBar />
        <Box
          sx={{
            flex: 1,
            // display: 'grid',
            // gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
            // gridGap: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Box sx={{ backgroundColor: 'red', flex: 1.7 }}>Hello</Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <Box sx={{ backgroundColor: 'red', flex: 1 }}>Hello</Box>
            <Box sx={{ backgroundColor: 'red', flex: 1 }}>Hello</Box>
            <Box sx={{ backgroundColor: 'red', flex: 1 }}>Hello</Box>
          </Box>
        </Box>
      </Box>
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
    </>
  );
};
