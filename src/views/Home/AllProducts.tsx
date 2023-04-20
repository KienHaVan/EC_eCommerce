import { GetAllProductsDataType } from '@apis/ProductApi/types';
import { ProductCard } from '@components/ProductCard';
import { Box, Button, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { RootState, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import React from 'react';

interface Props {
  allProducts: GetAllProductsDataType | undefined;
}

export const AllProducts = ({ allProducts }: Props) => {
  const categoryChosen = useAppSelector(
    (state: RootState) => state.product.categoryChosen
  );
  return (
    <>
      <Box
        sx={{
          padding: '8px 28px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '20px 0',
        }}
      >
        <Typography fontWeight={700} fontSize={'22px'} lineHeight={'25px'}>
          {!categoryChosen ? 'Products' : categoryChosen}
        </Typography>
        <Button
          sx={{
            padding: '8px 16px',
            border: '1px solid #F0E36A',
            borderRadius: '56px',
            textTransform: 'none',
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={'16px'}
            lineHeight={'18px'}
            color={theme.palette.common.black}
          >
            Show more ...
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
      >
        {allProducts?.result.map((product) => (
          <ProductCard product={product} key={nanoid()} />
        ))}
      </Box>
    </>
  );
};
