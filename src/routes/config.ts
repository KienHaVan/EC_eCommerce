import { RoleType } from '@appTypes/auth.types';

export const PATH = {
  HOME: '/',
  CHECKOUT: '/checkout',
  DASHBOARD: '/dashboard',
  ERROR: '/error',
  PRODUCT_DETAILS: '/product-details',
  SHOPPING_CART: '/shopping-cart',
  USER_DETAIL: '/user-detail',
};

export const ROLE = {
  ADMIN: 'admin' as RoleType,
  USER: 'user' as RoleType,
};
