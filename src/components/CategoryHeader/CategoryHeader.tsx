import { Typography } from '@mui/material';
import { StyledCategoryBox } from '@styles/components/CategoryHeader/CategoryHeader';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';
import { Props } from './type';

export const CategoryHeader = ({ color, size }: Props) => {
  return (
    <StyledCategoryBox>
      <HiMenuAlt1 size={24} color={color} />
      <Typography
        fontWeight={700}
        fontSize={size === 'small' ? 25 : size === 'medium' ? 32 : 16}
        color={color}
      >
        Categories
      </Typography>
    </StyledCategoryBox>
  );
};
