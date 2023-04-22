import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

export const StyledBoxUpper = styled(Box)(({ theme }) => ({
  backgroundColor: 'red',
  flex: 1.7,
  borderRadius: '5px',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '5px',
}));

export const StyledBoxDown = styled(Box)(({ theme }) => ({
  backgroundColor: 'red',
  flex: 1,
  borderRadius: '5px',
}));
