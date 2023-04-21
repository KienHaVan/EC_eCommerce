import { Images } from '@assets/index';
import { Box, Typography } from '@mui/material';
import {
  StyledBoxCenter,
  StyledBoxContainer,
} from '@styles/components/SpecialTag/SpecialTag';
import { theme } from '@styles/theme.styles';
import React from 'react';

export const SpecialTag = () => {
  return (
    <StyledBoxContainer>
      <img src={Images.FREESHIP} alt="" />
      <StyledBoxCenter>
        <Typography fontWeight={700} fontSize={'24px'} lineHeight={'28px'}>
          Free Shipping
        </Typography>
        <Typography fontWeight={400} fontSize={'14px'} lineHeight={'16px'}>
          For orders from %50
        </Typography>
      </StyledBoxCenter>
    </StyledBoxContainer>
  );
};
