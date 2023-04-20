export interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface LoginFormType {
  email: string;
  password: string;
}
