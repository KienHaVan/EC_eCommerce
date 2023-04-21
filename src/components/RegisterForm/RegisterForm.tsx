import { AuthenModal } from '@components/AuthenModal';
import { CommonForm } from '@components/CommonForm';
import * as yup from 'yup';
import { RegisterFormType, Props } from './types';
import { useAppDispatch } from '@store/store';
import {
  handleCloseGlobalLoading,
  handleCloseRegister,
  handleOpenGlobalLoading,
  handleOpenLogin,
} from '@store/slices/statusSlice';
import { useLoginMutation, useRegisterMutation } from '@apis/AuthApi';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { setCredentials } from '@store/slices/authSlice';
import { useEffect } from 'react';
import { InputType } from '@appTypes/form.types';

const formSchema = yup
  .object({
    username: yup.string().required('Please insert your name'),
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
      .min(6, 'Password length should be at least 6 characters')
      .max(20, 'Password cannot exceed more than 20 characters'),
    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  })
  .required();

const resetedValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const formFields = [
  { name: 'username', label: 'User Name', type: 'text' as InputType },
  { name: 'email', label: 'Email@example.com', type: 'email' as InputType },
  { name: 'password', label: 'Password', type: 'password' as InputType },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password' as InputType,
  },
];

export const RegisterForm = ({ open, handleOpen, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  const [registerFn, { isLoading: RegisterLoading }] = useRegisterMutation();
  const [loginFn, { isLoading: LoginLoading }] = useLoginMutation();
  useEffect(() => {
    if (RegisterLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [RegisterLoading]);
  const onRegister = async (data: RegisterFormType) => {
    try {
      await registerFn({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(handleCloseRegister());
      toast('Register successfully');
      const result = await Swal.fire({
        title: 'Go to login?',
        showCancelButton: true,
        confirmButtonText: 'Login',
      });
      if (result.isConfirmed) {
        dispatch(handleOpenLogin());
        // const auth = await loginFn({
        //   email: data.email,
        //   password: data.password,
        //   deviceId: `deviceId-${data.email}`,
        // }).unwrap();
        // dispatch(setCredentials(auth));
      }
    } catch (error) {
      toast.error('Register failed!');
    }
  };
  const supportButton: {
    text: string;
    onClick: () => void;
  } = {
    text: 'Login',
    onClick: () => {
      dispatch(handleCloseRegister());
      dispatch(handleOpenLogin());
    },
  };
  return (
    <AuthenModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      reverse
    >
      <CommonForm<any>
        onSubmit={onRegister}
        submitButtonText="Register"
        formFields={formFields}
        resetedValue={resetedValue}
        formSchema={formSchema}
        mode="show"
        supportButton={supportButton}
      />
    </AuthenModal>
  );
};
