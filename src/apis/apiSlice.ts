import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import store, { RootState } from '@store/store';
import { Mutex } from 'async-mutex';
import {
  RefreshTokensRequestType,
  RefreshTokensResponseDataType,
} from './AuthApi/types';
import { logOut, setCredentials } from '@store/slices/authSlice';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth?.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const auth = store.getState().auth;
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshTokenResponse = await baseQuery(
          {
            url: 'auth/refresh-tokens',
            method: 'POST',
            body: {
              refreshToken: auth.refreshToken,
              deviceId: auth.deviceId,
            },
          },
          api,
          extraOptions
        );

        const refreshTokenDataResponse =
          refreshTokenResponse?.data as RefreshTokensResponseDataType;

        if (refreshTokenDataResponse) {
          api.dispatch(
            setCredentials({
              ...auth,
              accessToken: refreshTokenDataResponse.access.token,
              refreshToken: refreshTokenDataResponse.refresh.token,
            })
          );
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['Auth', 'Cart', 'Order', 'Product', 'User'],
});

export default apiSlice;
