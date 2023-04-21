import { Box, Button, FormControl, Typography, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '12px',
  padding: '60px',
  borderRadius: '20px',
}));

export const StyledPasswordButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '12px',
  color: theme.palette.common.GREY_700,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
}));

export const StyledSupportButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 700,
  fontSize: '12px',
  color: theme.palette.common.GREY_700,
  marginTop: '-8px',
  width: 'fit-content',
  alignSelf: 'center',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
}));

export const StyledSubmitButtonText = styled(Typography)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '24px',
  textTransform: 'none',
}));
