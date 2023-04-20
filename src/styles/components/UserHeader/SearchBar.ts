import { Box, Divider, InputBase, styled } from '@mui/material';

export const StyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '5px',
  padding: '4px 4px',
  backgroundColor: theme.palette.grey[400],
  flex: 1,
  marginLeft: '12px',
}));

export const StyledCategoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginLeft: '12px',
  marginRight: '12px',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
}));
