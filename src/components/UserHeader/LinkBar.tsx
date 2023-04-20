import { Box, Button, Typography, styled } from '@mui/material';
import {
  StyledBoxContainer,
  StyledButton,
} from '@styles/components/UserHeader/LinkBar';
import React from 'react';

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
