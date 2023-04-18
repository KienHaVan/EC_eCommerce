import {
  Box,
  Divider,
  InputBase,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { HiMenuAlt1, HiOutlineSearch } from 'react-icons/hi';

const StyledSearch = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '5px',
  padding: '4px 4px',
  backgroundColor: theme.palette.grey[400],
  flex: 1,
}));

const StyledCategoryBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}));

export const SearchBar = () => {
  return (
    <StyledSearch>
      <StyledCategoryBox>
        <HiMenuAlt1 size={24} />
        <Typography
          fontWeight={600}
          fontSize={20}
          color={theme.palette.grey[900]}
        >
          Categories
        </Typography>
      </StyledCategoryBox>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ marginLeft: '12px', marginRight: '12px' }}
      />
      <InputBase sx={{ flex: 1 }} placeholder="Search Items …" />
      <Box marginX={'12px'}>
        <HiOutlineSearch size={24} />
      </Box>
    </StyledSearch>
  );
};
