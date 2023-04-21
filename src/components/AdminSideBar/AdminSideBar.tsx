import { Images } from '@assets/index';
import { Avatar, Badge, Button, Collapse, InputBase } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import {
  StyledAdminTag,
  StyledAppBox,
  StyledCollapseButton,
  StyledInfoBox,
  StyledListContainer,
  StyledListItemButton,
  StyledMenuButton,
  StyledNameBox,
  StyledSearchBox,
  StyledToolbar,
  StyledToolbarBoxContainer,
} from '@styles/components/AdminSideBar/AdminSideBar';
import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const list = [
  {
    id: 1,
    icon: Images.DASHBOARD,
    text: 'Dashboard',
    children: [],
  },
  {
    id: 2,
    icon: Images.PRODUCT,
    text: 'Product',
    children: ['Product List', 'Add Product'],
  },
  {
    id: 3,
    icon: Images.USER,
    text: 'User',
    children: ['User List', 'Add User'],
  },
  {
    id: 4,
    icon: Images.CART,
    text: 'Orders',
    children: [],
  },
  {
    id: 5,
    icon: Images.SETTING,
    text: 'Settings',
    children: ['Setting'],
  },
];

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: drawerWidth,
    width: `calc(100% - 65px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const AdminSideBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [idChosen, setIdChosen] = useState(0);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleMenu = (id: number) => {
    if (id === idChosen) {
      setIdChosen(0);
    } else {
      setIdChosen(id);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <StyledAppBar position="fixed" open={open}>
        <StyledToolbar>
          <StyledToolbarBoxContainer>
            <StyledMenuButton onClick={toggleDrawer}>
              <img src={Images.MENU} alt="" />
            </StyledMenuButton>
            <StyledSearchBox>
              <Box marginX={'12px'} className="center">
                <HiOutlineSearch size={24} />
              </Box>
              <InputBase placeholder="Search" />
            </StyledSearchBox>
          </StyledToolbarBoxContainer>
          <StyledToolbarBoxContainer>
            <Button>
              <Badge badgeContent={4} color="primary">
                <img src={Images.NOTIFY} alt="" />
              </Badge>
            </Button>
            <StyledInfoBox>
              <Avatar variant="rounded">
                <img
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </Avatar>
              <Box>
                <Typography
                  color={theme.palette.common.black}
                  fontSize={'18px'}
                >
                  Kien Van
                </Typography>
                <Typography color={theme.palette.common.GREY_500}>
                  Admin
                </Typography>
              </Box>
            </StyledInfoBox>
          </StyledToolbarBoxContainer>
        </StyledToolbar>
      </StyledAppBar>

      <StyledDrawer variant="permanent" open={open}>
        <StyledListContainer>
          <StyledNameBox visibility={open ? 'visible' : 'hidden'}>
            <Typography fontWeight={700} fontSize={25} color="black">
              SHOP APP
            </Typography>
            <StyledAdminTag className="center">
              <Typography>ADMIN</Typography>
            </StyledAdminTag>
          </StyledNameBox>
          <StyledAppBox justifyContent={open ? 'initial' : 'center'}>
            <Typography color={theme.palette.common.GREY_400} fontWeight={700}>
              {open ? 'APPLICATION' : 'APP'}
            </Typography>
          </StyledAppBox>
          {list.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <StyledListItemButton
                sx={{ justifyContent: open ? 'initial' : 'center' }}
                onClick={() => toggleMenu(item.id)}
              >
                <img src={item.icon} alt="" />
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: theme.palette.common.white,
                  }}
                />
                {item.children.length > 0 && item.id === idChosen ? (
                  <img
                    src={Images.DOWN}
                    alt=""
                    style={{ display: open ? 'block' : 'none' }}
                  />
                ) : item.children.length > 0 && item.id !== idChosen ? (
                  <img
                    src={Images.LEFT}
                    alt=""
                    style={{ display: open ? 'block' : 'none' }}
                  />
                ) : null}
              </StyledListItemButton>
              {open && item.children.length > 0 && item.id === idChosen && (
                <Collapse in={true} timeout="auto" unmountOnExit>
                  {item.children.map((one, index) => (
                    <List component="div" disablePadding>
                      <StyledCollapseButton>
                        <ListItemText
                          primary={one}
                          sx={{ color: theme.palette.common.white }}
                        />
                      </StyledCollapseButton>
                    </List>
                  ))}
                </Collapse>
              )}
            </ListItem>
          ))}
        </StyledListContainer>
      </StyledDrawer>
    </Box>
  );
};
