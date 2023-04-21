import { SpecialTag } from '@components/SpecialTag';
import { Box } from '@mui/material';
import { StyledBoxContainer } from '@styles/views/Home/SpecialCoupons';
import React from 'react';

export const SpecialCoupons = () => {
  return (
    <StyledBoxContainer>
      <SpecialTag />
      <SpecialTag />
      <SpecialTag />
      <SpecialTag />
    </StyledBoxContainer>
  );
};
