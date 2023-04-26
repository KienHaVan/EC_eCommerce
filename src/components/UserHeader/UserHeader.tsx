import {
  AppBar,
  Avatar,
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
import { useAppDispatch, useAppSelector } from '@store/store';
import { handleOpenLogin } from '@store/slices/statusSlice';
import { selectCurrentUser } from '@store/slices/authSlice';
import { useModal } from '@hooks/useModal';
import { UserMenu } from './UserMenu';
import { CartMenu } from './CartMenu';
import { useNavigate } from 'react-router-dom';
import { theme } from '@styles/theme.styles';

const StyledLinkToolBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.common.GREY_300,
  '&.MuiToolbar-root': {
    minHeight: '38px',
  },
}));

export const UserHeader = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const [anchorAvatarEl, setAnchorAvatarEl] =
    React.useState<null | HTMLElement>(null);
  const [anchorCartEl, setAnchorCartEl] = React.useState<null | HTMLElement>(
    null
  );
  const openAvatar = Boolean(anchorAvatarEl);
  const openCart = Boolean(anchorCartEl);
  const handleToggleAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAvatarEl(event.currentTarget);
  };
  const handleToggleCart = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCartEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorAvatarEl(null);
    setAnchorCartEl(null);
  };

  const handleClickAvatar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (user) {
      handleToggleAvatar(event);
    } else {
      dispatch(handleOpenLogin());
    }
  };
  const handleClickCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleToggleCart(event);
  };

  const navigate = useNavigate();

  return (
    <AppBar component="nav">
      <StyledLinkToolBar>
        <LinkBar />
      </StyledLinkToolBar>
      <Toolbar>
        <StyledContainerBox>
          <Button onClick={() => navigate('/')}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              fontWeight={700}
              color={theme.palette.common.black}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              SHOP APP
            </Typography>
          </Button>
          <SearchBar />
          <Button onClick={(event) => handleClickCart(event)}>
            <img src={Images.CARTHOME} alt="" style={{ width: '32px' }} />
          </Button>
          <Button onClick={(event) => handleClickAvatar(event)}>
            {user ? (
              <Avatar variant="circular" sizes="50px">
                <img
                  src={
                    user.avatar ||
                    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  }
                  alt=""
                />
              </Avatar>
            ) : (
              <img src={Images.USERHOME} alt="" style={{ width: '32px' }} />
            )}
          </Button>
          <UserMenu
            open={openAvatar}
            anchorEl={anchorAvatarEl}
            handleClose={handleClose}
          />
          <CartMenu
            open={openCart}
            anchorEl={anchorCartEl}
            handleClose={handleClose}
          />
        </StyledContainerBox>
      </Toolbar>
    </AppBar>
  );
};
