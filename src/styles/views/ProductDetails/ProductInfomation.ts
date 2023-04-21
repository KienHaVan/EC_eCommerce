import { Box, Typography, styled } from '@mui/material';
import { Swiper } from 'swiper/react';

export const StyledSwiperDownImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  padding: '32px 16px',
}));

export const StyledRatingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  margin: '20px 0',
  padding: '12px 18px',
}));

export const StyledBranchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '50px',
}));

export const StyledBranchText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
}));

export const StyledPriceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '24px',
  marginTop: '16px',
}));

export const StyledCouponBox = styled(Box)(({ theme }) => ({
  padding: '6px',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '5px',
}));
