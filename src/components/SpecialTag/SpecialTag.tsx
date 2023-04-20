import { Images } from '@assets/index';
import { Box, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';

export const SpecialTag = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 24px',
        borderRadius: '5px',
        width: '100%',
        backgroundColor: theme.palette.common.GREY_200,
        border: '1px solid #DFD8D8',
        gap: '12px',
      }}
    >
      <img src={Images.FREESHIP} alt="" />
      <Box sx={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
        <Typography fontWeight={700} fontSize={'24px'} lineHeight={'28px'}>
          Free Shipping
        </Typography>
        <Typography fontWeight={400} fontSize={'14px'} lineHeight={'16px'}>
          For orders from %50
        </Typography>
      </Box>
    </Box>
  );
};
