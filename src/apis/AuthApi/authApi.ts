import { AuthStateType, RoleType } from '@appTypes/auth.types';
import {
  ForgotPasswordRequestType,
  ForgotPasswordResponseType,
  LogOutRequestType,
  LogOutResponseType,
  LoginRequestType,
  LoginResponseType,
  RegisterRequestType,
  RegisterResponseType,
} from './types';
import apiSlice from '@apis/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthStateType, LoginRequestType>({
      query: (credentials) => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: LoginResponseType): AuthStateType => {
        const { user, tokens, deviceId } = response.data;

        const transformedResponse: AuthStateType = {
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            contact: user.contact,
            avatar: user.avatar,
            role: user.role as RoleType,
            isEmailVerified: user.isEmailVerified,
            isContactVerified: user.isContactVerified,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          },
          accessToken: tokens.access.token,
          refreshToken: tokens.refresh.token,
          deviceId,
        };

        return transformedResponse;
      },
    }),
    register: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: (credentials) => ({
        url: 'v1/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation<
      ForgotPasswordResponseType,
      ForgotPasswordRequestType
    >({
      query: (email) => ({
        url: 'v1/auth/forgot-password',
        method: 'POST',
        body: email,
      }),
    }),
    logout: builder.mutation<LogOutResponseType, LogOutRequestType>({
      query: (credentials) => ({
        url: 'v1/auth/logout',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = authApiSlice;
