import React, { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  return { open, handleOpen, handleClose, handleToggle };
};
