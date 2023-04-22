import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  selectCurrentProduct,
  setCategoryChosen,
} from '@store/slices/productSlice';
import { PATH } from '@routes/config';
import { useNavigate } from 'react-router-dom';

export const BreadcrumbsProduct = () => {
  const product = useAppSelector(selectCurrentProduct);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Stack spacing={2} padding="12px">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(PATH.HOME)}
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            if (product?.category) {
              dispatch(setCategoryChosen(product.category));
            }
            navigate(PATH.HOME);
          }}
        >
          {product?.category}
        </Link>
        <Typography color="text.primary">{product?.brand}</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
