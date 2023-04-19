export interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface RegisterFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
