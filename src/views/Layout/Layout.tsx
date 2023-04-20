import { AdminSideBar } from '@components/AdminSideBar';
import { CategoryBar } from '@components/CategoryBar';
import { CommonButton } from '@components/CommonButton';
import { UserHeader } from '@components/UserHeader';
import { Box, Container } from '@mui/material';
import { selectCurrentUser } from '@store/slices/authSlice';
import { useAppSelector } from '@store/store';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
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
      <Box paddingTop={'150px'}>
        <Outlet />
      </Box>
    </Container>
  );
};
