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
  selectProductSearch,
  setProductSearch,
} from '@store/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  StyledCategoryBox,
  StyledDivider,
  StyledInputBase,
  StyledSearch,
} from '@styles/components/UserHeader/SearchBar';
import { theme } from '@styles/theme.styles';
import React, { useEffect, useState } from 'react';
import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';
import { debounce } from 'lodash';

export const SearchBar = () => {
  const productSearch = useAppSelector(selectProductSearch);
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    const searchFn = debounce(() => {
      dispatch(setProductSearch(search));
    }, 500);
    searchFn();
  }, [search]);

  return (
    <StyledSearch>
      <CategoryHeader color={theme.palette.common.GREY_600} size="small" />
      <StyledDivider orientation="vertical" flexItem />
      <StyledInputBase
        placeholder="Search Items …"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box marginX={'12px'}>
        <HiOutlineSearch size={24} />
      </Box>
    </StyledSearch>
  );
};
