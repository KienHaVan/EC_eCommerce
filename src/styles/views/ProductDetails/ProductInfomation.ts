import { Box, Button, ButtonGroup, Typography, styled } from '@mui/material';
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

export const StyledBoxBelow = styled(Box)(({ theme }) => ({
  marginTop: '20px',
}));

export const StyledColorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  marginTop: '20px',
}));

export const StyledColorLabel = styled('label')(({ theme }) => ({
  display: 'block',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
}));

export const StyledQuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
  marginTop: '12px',
}));

export const StyledQuantityButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  backgroundColor: '#E2E4E5',
  borderColor: '#33A0FF',
  minWidth: '160px',
  minHeight: '52px',
  display: 'flex',
  alignItems: 'stretch',
}));

export const StyledQuantityText = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '30px',
}));

export const StyledQuantityButton = styled(Button)(({ theme }) => ({
  padding: '12px 32px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}));
