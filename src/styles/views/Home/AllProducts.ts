import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: '8px 28px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
}));

export const StyledMoreButton = styled(Button)(({ theme }) => ({
  padding: '8px 16px',
  border: '1px solid #F0E36A',
  borderRadius: '56px',
  textTransform: 'none',
}));

export const StyledBoxDown = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',
}));
