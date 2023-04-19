import { AdminSideBar } from '@components/AdminSideBar';
import { CategoryBar } from '@components/CategoryBar';
import { CommonButton } from '@components/CommonButton';
import { UserHeader } from '@components/UserHeader';
import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      {/* <CommonButton /> */}
      <UserHeader />
      {/* <AdminSideBar /> */}
      {/* <CategoryBar /> */}
      <Box paddingTop={'150px'}>
        <Outlet />
      </Box>
    </Container>
  );
};
