import { Box, styled } from '@mui/material';

export const StyledCategoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}));
