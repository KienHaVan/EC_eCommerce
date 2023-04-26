import { useSearchProductsQuery } from '@apis/ProductApi';
import { AdminSideBar } from '@components/AdminSideBar';
import { CategoryBar } from '@components/CategoryBar';
import { CommonButton } from '@components/CommonButton';
import { UserHeader } from '@components/UserHeader';
import { Box, Container } from '@mui/material';
import { selectCurrentUser } from '@store/slices/authSlice';
import { selectProductSearch } from '@store/slices/productSlice';
import {
  handleCloseGlobalLoading,
  handleOpenGlobalLoading,
} from '@store/slices/statusSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { AllProducts } from '@views/Home/AllProducts';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchDisplay } from './SearchDisplay';

export const Layout = () => {
  const productSearch = useAppSelector(selectProductSearch);
  console.log(
    '🚀 ~ file: Layout.tsx:21 ~ Layout ~ productSearch:',
    productSearch
  );
  const { data, isLoading } = useSearchProductsQuery(
    {
      keyWord: productSearch,
    },
    {
      skip: productSearch === '',
    }
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);

  const user = useAppSelector(selectCurrentUser);
  if (user?.role === 'admin') {
    return (
      <Container maxWidth="lg" disableGutters>
        <AdminSideBar />
        <Box paddingTop={'150px'}>
          <Outlet />
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" disableGutters>
      <UserHeader />
      <Box paddingTop={'172px'}>
        {productSearch === '' ? <Outlet /> : <SearchDisplay data={data} />}
      </Box>
    </Container>
  );
};
