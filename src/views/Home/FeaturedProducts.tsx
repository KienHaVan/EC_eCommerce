import { Box } from '@mui/material';
import {
  StyledBoxContainer,
  StyledBoxDown,
  StyledBoxUpper,
  StyledImage,
} from '@styles/views/Home/FeaturedProducts';
import React from 'react';

export const FeaturedProducts = () => {
  return (
    <StyledBoxContainer>
      <StyledBoxUpper>
        <StyledImage
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </StyledBoxUpper>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <StyledBoxDown>
          <StyledImage
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </StyledBoxDown>
        <Box sx={{ backgroundColor: 'red', flex: 1, borderRadius: '5px' }}>
          <StyledImage
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Box>
        <Box sx={{ backgroundColor: 'red', flex: 1, borderRadius: '5px' }}>
          <StyledImage
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Box>
      </Box>
    </StyledBoxContainer>
  );
};
