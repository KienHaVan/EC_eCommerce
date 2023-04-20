import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { RootState, useAppSelector } from '@store/store';
import React from 'react';

const LoadingModal = () => {
  const globalLoading = useAppSelector(
    (state: RootState) => state.status.globalLoading
  );
  return (
    <>
      <Backdrop
        sx={{
          color: 'rgba(0,0,0,0.2)',
          zIndex: (theme) => theme.zIndex.modal + 1,
        }}
        open={globalLoading}
      >
        <CircularProgress />
      </Backdrop>
    </>
  );
};

export default LoadingModal;
