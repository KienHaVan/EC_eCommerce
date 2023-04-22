import { useCreateReviewForProductMutation } from '@apis/ProductApi';
import { CreateReviewForProductRequestType } from '@apis/ProductApi/types';
import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import { selectCurrentUser } from '@store/slices/authSlice';
import { selectCurrentProduct } from '@store/slices/productSlice';
import {
  handleCloseGlobalLoading,
  handleOpenGlobalLoading,
  handleOpenLogin,
} from '@store/slices/statusSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const WriteReview = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const product = useAppSelector(selectCurrentProduct);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [postReview, { isLoading }] = useCreateReviewForProductMutation();
  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);
  const handlePostReview = async () => {
    if (user) {
      try {
        if (rating && product?.id) {
          const review: CreateReviewForProductRequestType = {
            rating,
            content,
            productId: product?.id,
          };
          await postReview(review).unwrap();
          toast('Post Review Successfully');
          setRating(null);
          setContent('');
        }
      } catch (error) {
        toast.error('Post Review Failed!');
      }
    } else {
      dispatch(handleOpenLogin());
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
        padding: '0 50px',
      }}
    >
      <Typography fontWeight={700} fontSize="28px" lineHeight="33px">
        Write Review
      </Typography>
      <Rating
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <TextField
        label="Write your reviews"
        multiline
        rows={3}
        fullWidth
        value={content}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setContent(event.target.value)
        }
      />
      <Button
        variant="contained"
        sx={{
          padding: '12px 60px',
          borderRadius: '5px',
          textTransform: 'none',
        }}
        onClick={handlePostReview}
      >
        <Typography fontWeight={700} fontSize="16px" lineHeight="18px">
          Post Your Review
        </Typography>
      </Button>
    </Box>
  );
};
