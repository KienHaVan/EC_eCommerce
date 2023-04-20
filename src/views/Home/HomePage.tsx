import { useGetAllProductsQuery } from '@apis/ProductApi/productApi';
import { Images } from '@assets/index';
import { AuthenModal } from '@components/AuthenModal';
import { CategoryBar } from '@components/CategoryBar';
import { ForgotPasswordForm } from '@components/ForgotPasswordForm';
import { LoginForm } from '@components/LoginForm';
import { ProductCard } from '@components/ProductCard';
import { RegisterForm } from '@components/RegisterForm';
import { SpecialTag } from '@components/SpecialTag';
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

  const { data, error, isLoading } = useGetAllProductsQuery({
    page: 0,
    size: 8,
  });

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <CategoryBar />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Box sx={{ backgroundColor: 'red', flex: 1.7, borderRadius: '5px' }}>
            <img
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <Box sx={{ backgroundColor: 'red', flex: 1, borderRadius: '5px' }}>
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: 'red', flex: 1, borderRadius: '5px' }}>
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </Box>
            <Box sx={{ backgroundColor: 'red', flex: 1, borderRadius: '5px' }}>
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          marginTop: '8px',
        }}
      >
        <SpecialTag />
        <SpecialTag />
        <SpecialTag />
        <SpecialTag />
      </Box>
      <Box
        sx={{
          padding: '8px 28px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '20px 0',
        }}
      >
        <Typography fontWeight={700} fontSize={'22px'} lineHeight={'25px'}>
          Best Sellers
        </Typography>
        <Button
          sx={{
            padding: '8px 16px',
            border: '1px solid #F0E36A',
            borderRadius: '56px',
            textTransform: 'none',
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={'16px'}
            lineHeight={'18px'}
            color={theme.palette.common.black}
          >
            Show more ...
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
