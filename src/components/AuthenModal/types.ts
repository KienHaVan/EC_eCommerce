import { ReactNode } from 'react';

export interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  reverse?: boolean;
  children: ReactNode;
}
