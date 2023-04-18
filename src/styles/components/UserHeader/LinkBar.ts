import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.common.GREY_500,
}));
