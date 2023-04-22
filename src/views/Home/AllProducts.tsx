import { GetAllProductsDataType } from '@apis/ProductApi/types';
import { ProductCard } from '@components/ProductCard';
import { Box, Button, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { RootState, useAppSelector } from '@store/store';
import { theme } from '@styles/theme.styles';
import {
  StyledBoxContainer,
  StyledBoxDown,
  StyledMoreButton,
} from '@styles/views/Home/AllProducts';
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
      <StyledBoxContainer>
        <Typography fontWeight={700} fontSize={'22px'} lineHeight={'25px'}>
          {!categoryChosen ? 'Products' : categoryChosen}
        </Typography>
        <StyledMoreButton>
          <Typography
            fontWeight={700}
            fontSize={'16px'}
            lineHeight={'18px'}
            color={theme.palette.common.black}
          >
            Show more ...
          </Typography>
        </StyledMoreButton>
      </StyledBoxContainer>
      <StyledBoxDown>
        {allProducts?.result.map((product) => (
          <ProductCard product={product} key={nanoid()} />
        ))}
      </StyledBoxDown>
    </>
  );
};
