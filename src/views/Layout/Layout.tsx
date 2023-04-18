import { CommonButton } from '@components/CommonButton';
import { UserHeader } from '@components/UserHeader';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container maxWidth="lg">
      {/* <CommonButton /> */}
      <UserHeader />
      <Outlet />
    </Container>
  );
};
