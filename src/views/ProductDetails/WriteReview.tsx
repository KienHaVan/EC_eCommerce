import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import { selectCurrentUser } from '@store/slices/authSlice';
import { selectCurrentProduct } from '@store/slices/productSlice';
import { handleOpenLogin } from '@store/slices/statusSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import React, { useState } from 'react';

export const WriteReview = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [content, setContent] = useState('');
  const product = useAppSelector(selectCurrentProduct);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const handlePostReview = async () => {
    if (user) {
      console.log('Post review');
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
      <TextField label="Write your reviews" multiline rows={3} fullWidth />
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
