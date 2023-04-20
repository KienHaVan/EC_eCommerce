import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logOut } from '@store/slices/authSlice';
import { useAppDispatch } from '@store/store';
import { theme } from '@styles/theme.styles';

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export const CartMenu = ({ anchorEl, open, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      sx={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          width: '330px',
          padding: '12px 16px',
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            padding: '4px 0',
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>Cart Menu</MenuItem>
    </Menu>
  );
};
