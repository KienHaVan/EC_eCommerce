import { AuthenModal } from '@components/AuthenModal';
import { CommonForm } from '@components/CommonForm';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useLoginMutation, useResetPasswordMutation } from '@apis/AuthApi';
import { LoginRequestType } from '@apis/AuthApi/types';
import { useAppDispatch } from '@store/store';
import { setCredentials } from '@store/slices/authSlice';
import { Props } from './types';
import {
  handleCloseResetPassword,
  handleOpenLogin,
  handleOpenResetPassword,
} from '@store/slices/statusSlice';

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
  })
  .required();

const formFields = [
  {
    name: 'email',
    label: 'Email@example.com',
    type: 'email',
  },
];

export const ForgotPasswordForm = ({
  open,
  handleOpen,
  handleClose,
}: Props) => {
  const dispatch = useAppDispatch();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const onResetPassword = async (data: { email: string }) => {
    console.log(data);

    try {
      await resetPassword(data).unwrap();
      toast('Please check your email');
      dispatch(handleCloseResetPassword());
      dispatch(handleOpenLogin());
    } catch (error) {
      toast.error('Reset Password Fail');
    }
  };
  const supportButton: {
    text: string;
    onClick: () => void;
  } = {
    text: 'Login',
    onClick: () => {
      dispatch(handleCloseResetPassword());
      dispatch(handleOpenResetPassword());
    },
  };
  return (
    <AuthenModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
      <CommonForm<any>
        upperTitle="Forgot Password?"
        onSubmit={onResetPassword}
        submitButtonText="Reset Password"
        formFields={formFields}
        formSchema={formSchema}
        supportButton={supportButton}
      />
    </AuthenModal>
  );
};
