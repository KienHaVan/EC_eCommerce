import { SpecialTag } from '@components/SpecialTag';
import { Box } from '@mui/material';
import React from 'react';

export const SpecialCoupons = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginTop: '8px',
      }}
    >
      <SpecialTag />
      <SpecialTag />
      <SpecialTag />
      <SpecialTag />
    </Box>
  );
};
