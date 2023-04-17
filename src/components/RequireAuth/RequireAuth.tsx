import { UserType } from '@appTypes/auth.types';
import { selectCurrentAccessToken } from '@store/slices/authSlice';
import { selectCurrentUser } from '@store/slices/authSlice';
import { useAppSelector } from '@store/store';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth = ({ allowedRole }: { allowedRole: string }) => {
  const user = useAppSelector(selectCurrentUser);
  const accessToken = useAppSelector(selectCurrentAccessToken);

  // return user?.role === allowedRole ? (
  //   <Outlet />
  // ) : accessToken ? (
  //   <Navigate to={'/error'} replace />
  // ) : (
  //   <Navigate to={'/login'} replace />
  // );
  return <Outlet />;
};
