import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  Toolbar,
  styled,
} from '@mui/material';

// App Bar

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledToolbarBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
}));

export const StyledMenuButton = styled(Button)(({ theme }) => ({
  width: '30px',
  height: '30px',
}));

export const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '5px',
  padding: '4px 4px',
  backgroundColor: theme.palette.grey[400],
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
}));

//Drawer
export const StyledListContainer = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: '100%',
  padding: 0,
}));

export const StyledNameBox = styled(Box)(({ theme }) => ({
  padding: '24px 12px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItem: 'center',
  backgroundColor: theme.palette.primary.main,
}));

export const StyledAdminTag = styled(Box)(({ theme }) => ({
  padding: '4px 10px',
  backgroundColor: 'white',
  borderRadius: '5px',
}));

export const StyledAppBox = styled(Box)(({ theme }) => ({
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 48,
  padding: '8px 20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledCollapseButton = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: '50px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));
