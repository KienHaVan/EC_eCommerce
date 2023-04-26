import { SearchProductDataType } from '@apis/ProductApi/types';
import { ProductCard } from '@components/ProductCard';
import { Box, styled } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',
  marginBottom: '20px',
}));

interface Props {
  data: SearchProductDataType | undefined;
}

export const SearchDisplay = ({ data }: Props) => {
  return (
    <StyledBox>
      {data?.products.result.map((product) => (
        <ProductCard product={product} key={nanoid()} />
      ))}
    </StyledBox>
  );
};
