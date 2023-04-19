import { Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingLeft: '60px',
  paddingRight: '60px',
  gap: '12px',
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
