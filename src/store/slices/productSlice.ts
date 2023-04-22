import { ProductType, ReviewType } from '@appTypes/product.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface ProductStateType {
  categoryChosen: string;
  currentProduct: ProductType | null;
  currentReview: ReviewType | null;
}

const initialState: ProductStateType = {
  categoryChosen: '',
  currentProduct: null,
  currentReview: null,
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
    setCurrentProduct: (state, action: PayloadAction<ProductType>) => {
      state.currentProduct = action.payload;
    },
    setCurrentReview: (state, action: PayloadAction<ReviewType>) => {
      state.currentReview = action.payload;
    },
  },
});

export const { setCategoryChosen, setCurrentProduct, setCurrentReview } =
  productSlice.actions;
export const productReducer = productSlice.reducer;

export const selectCurrentProduct = (state: RootState) =>
  state.product.currentProduct;
export const selectCurrentReview = (state: RootState) =>
  state.product.currentReview;
