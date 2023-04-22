import { Box, Button, Typography, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: '280px',
  padding: '24px 0 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '5px',
}));

export const StyledDivider = styled('div')(({ theme }) => ({
  height: '24px',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '16px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: '700',
  fontSize: '22px',
}));
