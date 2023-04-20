import { AuthStateType } from '@appTypes/auth.types';
import {
  selectCurrentAccessToken,
  selectCurrentUser,
  setCredentials,
} from '@store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { decryptData } from '@utils/cryptData';
import { ErrorPage } from '@views/ErrorPage';
import { Home } from '@views/Home';
import { Layout } from '@views/Layout';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PATH, ROLE } from './config';
import { ProductDetails } from '@views/ProductDetails';
import { RequireAuth } from '@components/RequireAuth';
import { Checkout } from '@views/Checkout';
import { ShoppingCart } from '@views/ShoppingCart';
import { UserDetail } from '@views/UserDetail';
import { Dashboard } from '@views/Dashboard';

export const MainRoute = () => {
  const user = useAppSelector(selectCurrentUser);
  const accessToken = useAppSelector(selectCurrentAccessToken);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth: AuthStateType = decryptData('auth');
    if (!auth) {
      setIsLoading(true);
      return;
    }
    setIsLoading(true);
    dispatch(setCredentials(auth));
  }, [dispatch]);

  return (
    <Routes>
      //PUBLIC
      <Route path="/" element={<Layout />}>
        <Route path={PATH.HOME} element={<Home />} />
        <Route
          path={`${PATH.PRODUCT_DETAILS}/:productId`}
          element={<ProductDetails />}
        />
        {/* User */}
        <Route element={<RequireAuth allowedRole={ROLE.USER} />}>
          <Route path="/" element={<Navigate to={PATH.HOME} />} />
          <Route path={PATH.CHECKOUT} element={<Checkout />} />
          <Route path={PATH.SHOPPING_CART} element={<ShoppingCart />} />
          <Route path={PATH.USER_DETAIL} element={<UserDetail />} />
        </Route>
        {/* Admin */}
        <Route element={<RequireAuth allowedRole={ROLE.ADMIN} />}>
          <Route path="/" element={<Navigate to={PATH.DASHBOARD} />} />
          <Route path={PATH.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
