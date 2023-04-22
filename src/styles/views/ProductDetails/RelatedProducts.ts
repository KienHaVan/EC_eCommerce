import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  marginTop: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'flex-start',
}));

export const StyledBoxHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
}));

export const StyledLineHeader = styled('div')(({ theme }) => ({
  height: '2px',
  width: '100%',
  flex: 1,
  display: 'block',
  backgroundColor: theme.palette.common.GREY_400,
  borderRadius: '60px',
}));

export const StyledPreviousButton = styled(Button)(({ theme }) => ({
  width: '26px',
  height: '26px',
  borderRadius: '5px',
  backgroundColor: theme.palette.common.GREY_300,
  minWidth: 'unset',
}));

export const StyledNextButton = styled(Button)(({ theme }) => ({
  width: '26px',
  height: '26px',
  borderRadius: '5px',
  backgroundColor: theme.palette.common.GREY_300,
  minWidth: 'unset',
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  marginBottom: '20px',
}));
