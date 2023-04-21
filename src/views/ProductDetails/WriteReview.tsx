import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';

export const WriteReview = () => {
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
        value={5}
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
      <TextField label="Write your reviews" multiline rows={3} fullWidth />
      <Button
        variant="contained"
        sx={{
          padding: '12px 60px',
          borderRadius: '5px',
          textTransform: 'none',
        }}
      >
        <Typography fontWeight={700} fontSize="16px" lineHeight="18px">
          Post Your Review
        </Typography>
      </Button>
    </Box>
  );
};
