import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '800px',
  height: '400px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledSideBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '100%',
  borderRadius: '20px',
  flexDirection: 'column',
}));

export const StyledCloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  right: '10px',
  top: '10px',
  width: '32px',
  height: '32px',
  borderRadius: '100%',
  textTransform: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  minWidth: 'auto',
}));
