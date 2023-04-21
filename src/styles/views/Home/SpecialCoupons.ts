import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',
  marginTop: '8px',
}));
