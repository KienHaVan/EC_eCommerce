import { Box, Tab, Tabs, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  width: 'min-content',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  '&.Mui-selected': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.GREY_300,
  },
}));
