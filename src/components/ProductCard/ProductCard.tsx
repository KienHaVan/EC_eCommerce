import {
  GetAllProductsDataType,
  GetAllProductsResultType,
} from '@apis/ProductApi/types';
import { Images } from '@assets/index';
import { Box, Button, Rating, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { PATH } from '@routes/config';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({
  product,
}: {
  product: GetAllProductsResultType;
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${PATH.PRODUCT_DETAILS}/${product.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <Box
        sx={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          border: '1px solid #B4B1B1',
          borderRadius: '5px',
          backgroundColor: theme.palette.common.white,
        }}
      >
        <img
          src={product.images[0].url}
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
          {product.name}
        </Typography>
        <Typography fontWeight={700} fontSize={'16'} lineHeight={'18px'}>
          ID: {product.id}
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
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            size="small"
          />
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
            $ {product.price.toFixed(2)}
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
            backgroundColor:
              product.countInStock > 0
                ? theme.palette.common.green
                : theme.palette.common.red,
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
            {product.countInStock > 0 ? 'Available' : 'Unavailable'}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
