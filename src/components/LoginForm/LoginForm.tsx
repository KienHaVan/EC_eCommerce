import { AuthenModal } from '@components/AuthenModal';
import { CommonForm } from '@components/CommonForm';
import * as yup from 'yup';
import { LoginFormType, Props } from './types';
import { toast } from 'react-toastify';
import { useLoginMutation } from '@apis/AuthApi';
import { LoginRequestType } from '@apis/AuthApi/types';
import { useAppDispatch } from '@store/store';
import { setCredentials } from '@store/slices/authSlice';
import {
  handleCloseGlobalLoading,
  handleCloseLogin,
  handleOpenGlobalLoading,
  handleOpenRegister,
} from '@store/slices/statusSlice';
import { useEffect } from 'react';

const formSchema = yup
  .object({
    email: yup
      .string()
      .lowercase()
      .required('Please insert your email')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter the valid email'
      ),
    password: yup
      .string()
      .required('Please insert your password')
      .min(4, 'Password length should be at least 6 characters')
      .max(20, 'Password cannot exceed more than 20 characters'),
  })
  .required();

const formFields = [
  { name: 'email', label: 'Email@gmail.com', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

export const LoginForm = ({ open, handleOpen, handleClose }: Props) => {
  const [loginFn, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);

  const onLogin = async (data: LoginFormType) => {
    try {
      const LoginRequestData: LoginRequestType = {
        email: data.email,
        password: data.password,
        deviceId: `deviceId-${data.email}`,
      };
      const result = await loginFn(LoginRequestData).unwrap();
      dispatch(setCredentials(result));
      toast('Login successfully!');
      handleClose();
    } catch (error) {
      toast.error('Login Failed!');
    }
  };
  const supportButton: {
    text: string;
    onClick: () => void;
  } = {
    text: 'Create An Account?',
    onClick: () => {
      dispatch(handleCloseLogin());
      dispatch(handleOpenRegister());
    },
  };
  return (
    <AuthenModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
      <CommonForm<any>
        onSubmit={onLogin}
        submitButtonText="Login"
        formFields={formFields}
        formSchema={formSchema}
        mode="forgot"
        supportButton={supportButton}
      />
    </AuthenModal>
  );
};
