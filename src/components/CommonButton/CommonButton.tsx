import { Button } from '@mui/material';
import React from 'react';
import { Props } from './types';

export const CommonButton = ({ fullWidth = true, content, primary }: Props) => {
  return (
    <Button variant="contained" fullWidth={fullWidth}>
      Contained
    </Button>
  );
};
