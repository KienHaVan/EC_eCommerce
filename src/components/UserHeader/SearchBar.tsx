import { CategoryHeader } from '@components/CategoryHeader';
import {
  Box,
  Divider,
  InputBase,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import {
  StyledCategoryBox,
  StyledDivider,
  StyledInputBase,
  StyledSearch,
} from '@styles/components/UserHeader/SearchBar';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';

export const SearchBar = () => {
  return (
    <StyledSearch>
      <CategoryHeader color={theme.palette.common.GREY_600} size="small" />
      <StyledDivider orientation="vertical" flexItem />
      <StyledInputBase placeholder="Search Items …" />
      <Box marginX={'12px'}>
        <HiOutlineSearch size={24} />
      </Box>
    </StyledSearch>
  );
};
