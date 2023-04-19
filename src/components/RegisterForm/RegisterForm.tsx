import { AuthenModal } from '@components/AuthenModal';
import { CommonForm } from '@components/CommonForm';
import * as yup from 'yup';
import { RegisterFormType, Props } from './types';

const formSchema = yup
  .object({
    name: yup.string().required('Please insert your name'),
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

const formFields = [
  { name: 'name', label: 'User Name', type: 'text' },
  { name: 'email', label: 'Email@example.com', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  {
    name: 'ConfirmPassword',
    label: 'Confirm Password',
    type: 'password',
  },
];

export const RegisterForm = ({ open, handleOpen, handleClose }: Props) => {
  const onRegister = () => {
    console.log('Register!');
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
        submitButtonText="Login"
        formFields={formFields}
        formSchema={formSchema}
        mode="show"
      />
    </AuthenModal>
  );
};
