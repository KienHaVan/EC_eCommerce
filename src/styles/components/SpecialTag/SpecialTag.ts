import { Box, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '20px 24px',
  borderRadius: '5px',
  width: '100%',
  backgroundColor: theme.palette.common.GREY_200,
  border: '1px solid #DFD8D8',
  gap: '12px',
}));

export const StyledBoxCenter = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
}));
