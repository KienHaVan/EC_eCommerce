import { Box, styled } from '@mui/material';

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '24px',
  padding: '24px 0',
}));
