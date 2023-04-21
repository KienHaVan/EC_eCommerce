import { Box, Divider, Rating, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  StyledAvatar,
  StyledBoxContainer,
} from '@styles/views/ProductDetails/CustomerReview';
export const CustomerReview = () => {
  return (
    <StyledBoxContainer>
      <StyledAvatar
        alt="Cindy Baker"
        src="https://plus.unsplash.com/premium_photo-1680706777306-b4f73c02a90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Box>
        <Typography fontWeight={700} fontSize="18px" lineHeight="21px">
          Samantha Smith
        </Typography>
        <Rating value={4} readOnly />
        <Typography fontWeight={400} fontSize="14px" lineHeight="16px">
          Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales
          in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor
          dui iaculis id. Curabitur imperdiet ultrices fermentum.
        </Typography>
        <Typography fontWeight={700} fontSize="12px" lineHeight="24px">
          27 May, 2018
        </Typography>
      </Box>
    </StyledBoxContainer>
  );
};
