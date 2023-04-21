import { Avatar, Box, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '28px',
  padding: '12px',
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
}));
