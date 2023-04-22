import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Props } from './types';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledFormControl,
  StyledPasswordButton,
  StyledSubmitButtonText,
  StyledSupportButton,
} from '@styles/components/CommonForm/CommonForm';
import { theme } from '@styles/theme.styles';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store/store';
import {
  handleCloseLogin,
  handleOpenResetPassword,
} from '@store/slices/statusSlice';
import { InputType } from '@appTypes/form.types';

type FormData = Record<string, unknown> & {
  [key: string]: string;
};

interface FormFieldType {
  name: keyof FormData;
  label: string;
  type: InputType;
}

interface Props<T extends FormData> {
  upperTitle?: string;
  onSubmit: SubmitHandler<T>;
  submitButtonText: string;
  formFields: FormFieldType[];
  resetedValue?: any;
  formSchema: yup.AnyObjectSchema;
  mode?: 'forgot' | 'show';
  supportButton?: {
    text: string;
    onClick: () => void;
  };
}

export const CommonForm = <T extends FormData>({
  upperTitle = 'Welcome to Shop App',
  onSubmit,
  submitButtonText,
  formFields,
  resetedValue,
  formSchema,
  mode = 'show',
  supportButton,
}: Props<T>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<T>({ resolver: yupResolver(formSchema) });
  const [showPasswordButton, setShowPasswordButton] = useState(false);
  const showPassword = () => {
    setShowPasswordButton(true);
  };
  const hidePassword = () => {
    setShowPasswordButton(false);
  };

  const submit = async (data: T) => {
    await onSubmit(data);
    reset(resetedValue);
  };

  const navigateToResetPassword = () => {
    dispatch(handleCloseLogin());
    dispatch(handleOpenResetPassword());
  };

  return (
    <StyledBox component={'form'} onSubmit={handleSubmit(submit)}>
      <Typography
        fontWeight={700}
        fontSize={'24px'}
        color={theme.palette.common.black}
      >
        {upperTitle}
      </Typography>
      {formFields.map((field, index) => {
        const { name, label, type } = field;
        if (name === 'password') {
          return (
            <StyledFormControl variant="standard" key={index}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                {...register(name.toString() as any)}
                error={!!errors[name]}
                // id="standard-adornment-password"
                type={showPasswordButton ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    {mode === 'show' && showPasswordButton ? (
                      <StyledPasswordButton onClick={hidePassword}>
                        Hide
                      </StyledPasswordButton>
                    ) : mode === 'show' && !showPasswordButton ? (
                      <StyledPasswordButton onClick={showPassword}>
                        Show
                      </StyledPasswordButton>
                    ) : (
                      <StyledPasswordButton onClick={navigateToResetPassword}>
                        Forgot?
                      </StyledPasswordButton>
                    )}
                  </InputAdornment>
                }
              />
              <FormHelperText error>
                {errors[name]?.message?.toString()}
              </FormHelperText>
            </StyledFormControl>
          );
        }
        return (
          <TextField
            key={index}
            variant="standard"
            label={label}
            type={type}
            fullWidth
            {...register(name.toString() as any)}
            error={!!errors[name]}
            helperText={errors[name]?.message?.toString()}
          ></TextField>
        );
      })}
      <StyledButton variant="contained" type="submit">
        <StyledSubmitButtonText>{submitButtonText}</StyledSubmitButtonText>
      </StyledButton>
      <StyledSupportButton onClick={supportButton?.onClick}>
        {supportButton?.text}
      </StyledSupportButton>
    </StyledBox>
  );
};
