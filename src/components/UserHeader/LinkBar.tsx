import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.common.GREY_500,
}));

const list = ['About us', 'Contacts', 'Store', 'Track orders'];

export const LinkBar = () => {
  return (
    <StyledBoxContainer>
      {list.map((item, index) => (
        <StyledButton key={index}>
          <Typography>{item}</Typography>
        </StyledButton>
      ))}
    </StyledBoxContainer>
  );
};
