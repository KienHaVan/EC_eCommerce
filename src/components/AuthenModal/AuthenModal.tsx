import { Images } from '@assets/index';
import { useModal } from '@hooks/useModal';
import { Box, Button, Modal, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { Props } from './types';
import {
  StyledBoxContainer,
  StyledCloseButton,
  StyledSideBox,
} from '@styles/components/AuthenModal/AuthenModal';

export const AuthenModal = ({
  open,
  handleOpen,
  handleClose,
  reverse = false,
  children,
}: Props) => {
  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <StyledBoxContainer flexDirection={reverse ? 'row-reverse' : 'row'}>
        <StyledSideBox flex={'50%'} className="center">
          <Typography fontWeight={700} fontSize={'68px'}>
            Shop App
          </Typography>
          <img src={Images.LOGO} alt="" />
        </StyledSideBox>
        <Box flex={'50%'} className="center">
          {children}
        </Box>
        <StyledCloseButton className="center" onClick={handleClose}>
          <Typography
            fontWeight={700}
            fontSize={'24px'}
            color={theme.palette.common.GREY_500}
          >
            x
          </Typography>
        </StyledCloseButton>
      </StyledBoxContainer>
    </Modal>
  );
};
