import { useGetAllCategoriesQuery } from '@apis/ProductApi/productApi';
import { Images } from '@assets/index';
import { CategoryHeader } from '@components/CategoryHeader';
import { Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { setCategoryChosen } from '@store/slices/productSlice';
import {
  handleCloseGlobalLoading,
  handleOpenGlobalLoading,
} from '@store/slices/statusSlice';
import { RootState, useAppDispatch, useAppSelector } from '@store/store';
import {
  StyledBoxContainer,
  StyledButton,
  StyledDivider,
  StyledText,
} from '@styles/components/CategoryBar/CategoryBar';
import { theme } from '@styles/theme.styles';
import { useEffect } from 'react';

export const CategoryBar = () => {
  const { data: allCategories, error, isLoading } = useGetAllCategoriesQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);
  const categoryChosen = useAppSelector(
    (state: RootState) => state.product.categoryChosen
  );
  return (
    <StyledBoxContainer>
      <CategoryHeader color={theme.palette.common.white} size="medium" />
      <StyledDivider></StyledDivider>
      {allCategories?.map((item) => (
        <StyledButton
          sx={{
            backgroundColor:
              categoryChosen === item ? theme.palette.primary.dark : 'unset',
          }}
          key={nanoid()}
          onClick={() => dispatch(setCategoryChosen(item))}
        >
          <StyledText>{item}</StyledText>
          <img src={Images.RIGHT} alt="" color={theme.palette.common.white} />
        </StyledButton>
      ))}
    </StyledBoxContainer>
  );
};
