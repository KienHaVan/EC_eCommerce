import { Box, Divider, Rating, Typography } from '@mui/material';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  StyledAvatar,
  StyledBoxContainer,
} from '@styles/views/ProductDetails/CustomerReview';
import { ReviewResultType } from '@appTypes/product.types';
import dayjs from 'dayjs';

export const CustomerReview = ({ review }: { review: ReviewResultType }) => {
  return (
    <StyledBoxContainer>
      <StyledAvatar
        alt="Cindy Baker"
        src={
          review.userReview.avatar ||
          'https://plus.unsplash.com/premium_photo-1680706777306-b4f73c02a90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        }
      />
      <Box>
        <Typography fontWeight={700} fontSize="18px" lineHeight="21px">
          {review.userReview.username}
        </Typography>
        <Rating value={review.rating} readOnly />
        <Typography fontWeight={400} fontSize="14px" lineHeight="16px">
          {review.content}
        </Typography>
        <Typography fontWeight={700} fontSize="12px" lineHeight="24px">
          {dayjs(review.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        </Typography>
      </Box>
    </StyledBoxContainer>
  );
};
