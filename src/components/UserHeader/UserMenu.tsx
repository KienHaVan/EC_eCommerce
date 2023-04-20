import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { theme } from '@styles/theme.styles';

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

export const UserMenu = ({ anchorEl, open, handleClose }: Props) => {
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
          width: '220px',
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
      <MenuItem>My Profile</MenuItem>
      <MenuItem>Order History</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};