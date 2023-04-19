import {
  AppBar,
  Badge,
  Box,
  Button,
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
import { StyledContainerBox } from '@styles/components/UserHeader/UserHeader';
import { Images } from '@assets/index';
import { useAppDispatch } from '@store/store';
import { handleOpenLogin } from '@store/slices/statusSlice';

const StyledLinkToolBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.common.GREY_300,
  '&.MuiToolbar-root': {
    minHeight: '38px',
  },
}));

export const UserHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <AppBar component="nav">
      <StyledLinkToolBar>
        <LinkBar />
      </StyledLinkToolBar>
      <Toolbar>
        <StyledContainerBox>
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
          <Button>
            <img src={Images.CARTHOME} alt="" />
          </Button>
          <Button onClick={() => dispatch(handleOpenLogin())}>
            <img src={Images.USERHOME} alt="" />
          </Button>
        </StyledContainerBox>
      </Toolbar>
    </AppBar>
  );
};
