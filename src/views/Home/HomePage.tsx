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
  handleCloseGlobalLoading,
  handleCloseLogin,
  handleCloseRegister,
  handleCloseResetPassword,
  handleOpenGlobalLoading,
  handleOpenLogin,
  handleOpenRegister,
  handleOpenResetPassword,
} from '@store/slices/statusSlice';
import { RootState, useAppDispatch, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import React, { useEffect, useState } from 'react';
import { FeaturedProducts } from './FeaturedProducts';
import { SpecialCoupons } from './SpecialCoupons';
import { AllProducts } from './AllProducts';
import { useGetAllProductsQuery } from '@apis/ProductApi';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
  const [pagination, setPagination] = useState({
    page: 1,
    size: 8,
  });

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination({ ...pagination, page: value });
  };

  const categoryChosen = useAppSelector(
    (state: RootState) => state.product.categoryChosen
  );

  const {
    data: allProducts,
    error,
    isLoading,
  } = useGetAllProductsQuery({
    page: pagination.page,
    size: pagination.size,
    category: categoryChosen || undefined,
  });

  useEffect(() => {
    setPagination({
      page: 1,
      size: 8,
    });
  }, [categoryChosen]);

  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <CategoryBar />
          <FeaturedProducts />
        </Box>

        <SpecialCoupons />

        <AllProducts allProducts={allProducts} />

        <Stack spacing={2} margin="20px 0" marginX={'auto'}>
          <Pagination
            count={allProducts?.totalPages}
            color="primary"
            page={pagination.page}
            onChange={handleChangePagination}
          />
        </Stack>
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
