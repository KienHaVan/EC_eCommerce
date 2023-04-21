import { Box, styled } from '@mui/material';

export const StyledDivContainer = styled('div')(({ theme }) => ({
  cursor: 'pointer',
}));

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid #B4B1B1',
  borderRadius: '5px',
  backgroundColor: theme.palette.common.white,
  minHeight: '472px',
}));

export const StyledImg = styled('img')(({ theme }) => ({
  height: '200px',
  width: '100%',
  borderRadius: '5px',
  marginBottom: '16px',
  objectFit: 'cover',
  boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)',
}));

export const StyledBoxCenter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '8px',
}));

export const StyledBoxUnder = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '16px',
}));

export const StyledBoxDown = styled(Box)(({ theme }) => ({
  border: '1px solid rgba(0, 202, 20, 0.5)',
  boxShadow: '5px 5px 20px rgba(196, 255, 202, 0.5)',
  borderRadius: '10px',
  maxWidth: '100px',
  padding: '4px 24px',
  marginTop: '4px',
}));
