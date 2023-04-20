import { Images } from '@assets/index';
import { Box, Button, Rating, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';

export const ProductCard = () => {
  return (
    <Box
      sx={{
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // maxWidth: '300px',
        border: '1px solid #B4B1B1',
        borderRadius: '5px',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        style={{
          height: '200px',
          width: '100%',
          borderRadius: '5px',
          marginBottom: '16px',
          objectFit: 'cover',
          boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)',
        }}
      />
      <Typography
        fontWeight={700}
        fontSize={'32px'}
        lineHeight={'37px'}
        marginBottom={'4px'}
      >
        Adidas Shoes
      </Typography>
      <Typography fontWeight={700} fontSize={'16'} lineHeight={'18px'}>
        ID: 123
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        <Rating name="read-only" value={4} readOnly size="small" />
        <Typography
          fontWeight={700}
          fontSize={'16px'}
          lineHeight={'18px'}
          color={theme.palette.common.red}
        >
          50% Off
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
        }}
      >
        <Typography fontWeight={700} fontSize={'24px'} lineHeight={'28px'}>
          $ 120.00
        </Typography>
        <Button>
          <img src={Images.CARTPLUS} alt="" />
        </Button>
      </Box>
      <Box
        sx={{
          border: '1px solid rgba(0, 202, 20, 0.5)',
          boxShadow: '5px 5px 20px rgba(196, 255, 202, 0.5)',
          borderRadius: '10px',
          backgroundColor: theme.palette.common.green,
          maxWidth: '100px',
          padding: '4px 24px',
          marginTop: '4px',
        }}
        className="center"
      >
        <Typography
          fontWeight={400}
          fontSize={'14px'}
          lineHeight={'16px'}
          color={theme.palette.common.white}
        >
          Available
        </Typography>
      </Box>
    </Box>
  );
};
