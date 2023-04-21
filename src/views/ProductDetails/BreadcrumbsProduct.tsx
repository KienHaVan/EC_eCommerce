import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const BreadcrumbsProduct = () => {
  return (
    <Stack spacing={2} padding="12px">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          // href="/material-ui/getting-started/installation/"
        >
          Shoes
        </Link>
        <Typography color="text.primary">Adidas Shoes</Typography>
      </Breadcrumbs>
    </Stack>
  );
};
