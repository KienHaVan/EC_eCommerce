import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import React from 'react';
import { SearchBar } from './SearchBar';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { LinkBar } from './LinkBar';

const StyledLinkToolBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.common.GREY_300,
  '&.MuiToolbar-root': {
    minHeight: '38px',
  },
}));

export const UserHeader = () => {
  return (
    <AppBar component="nav">
      <StyledLinkToolBar>
        <LinkBar />
      </StyledLinkToolBar>
      <Toolbar>
        <Box
          sx={{
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            fontWeight={700}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            SHOP APP
          </Typography>
          <SearchBar />
          <FiShoppingCart size={28} />
          <FiUser size={28} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
