import {
  GetAllProductsDataType,
  GetAllProductsResultType,
} from '@apis/ProductApi/types';
import { Images } from '@assets/index';
import { Box, Button, Rating, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { PATH } from '@routes/config';
import {
  StyledBoxCenter,
  StyledBoxContainer,
  StyledBoxDown,
  StyledBoxUnder,
  StyledDivContainer,
  StyledImg,
} from '@styles/components/ProductCart/ProductCart';
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
    <StyledDivContainer
      onClick={() => navigate(`${PATH.PRODUCT_DETAILS}/${product.id}`)}
    >
      <StyledBoxContainer>
        <StyledImg src={product.images[0].url} alt="" />
        <Typography
          fontWeight={700}
          fontSize={'32px'}
          lineHeight={'37px'}
          marginBottom={'4px'}
          className="textClamp"
          flex={1}
        >
          {product.name}
        </Typography>
        <Typography fontWeight={700} fontSize={'16'} lineHeight={'18px'}>
          ID: {product.id}
        </Typography>
        <StyledBoxCenter>
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
        </StyledBoxCenter>
        <StyledBoxUnder>
          <Typography fontWeight={700} fontSize={'24px'} lineHeight={'28px'}>
            $ {product.price.toFixed(2)}
          </Typography>
          <Button>
            <img src={Images.CARTPLUS} alt="" />
          </Button>
        </StyledBoxUnder>
        <StyledBoxDown
          sx={{
            backgroundColor:
              product.countInStock > 0
                ? theme.palette.common.green
                : theme.palette.common.red,
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
        </StyledBoxDown>
      </StyledBoxContainer>
    </StyledDivContainer>
  );
};
