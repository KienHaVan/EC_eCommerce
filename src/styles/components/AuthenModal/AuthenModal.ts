import { Box, Button, styled } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '800px',
  height: 'max-content',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledSideBox = styled(Box)(({ theme }) => ({
  borderRadius: '20px',
  flexDirection: 'column',
  height: '100%',
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
  backgroundColor: theme.palette.common.white,
}));
