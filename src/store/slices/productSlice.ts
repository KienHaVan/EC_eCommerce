import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductStateType {
  categoryChosen: string;
}

const initialState: ProductStateType = {
  categoryChosen: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategoryChosen: (state, action: PayloadAction<string>) => {
      if (state.categoryChosen === action.payload) {
        state.categoryChosen = '';
      } else {
        state.categoryChosen = action.payload;
      }
    },
  },
});

export const { setCategoryChosen } = productSlice.actions;
export const productReducer = productSlice.reducer;
