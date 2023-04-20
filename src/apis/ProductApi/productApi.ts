import apiSlice from '@apis/apiSlice';
import {
  GetAllCategoriesResponseType,
  GetAllProductsDataType,
  GetAllProductsParamsType,
  GetAllProductsResponseType,
  GetProductByIDDataType,
  GetProductByIDResponseType,
} from './types';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      GetAllProductsDataType,
      GetAllProductsParamsType
    >({
      query: (params) => ({
        url: 'v1/products',
        method: 'GET',
        params,
      }),
      transformResponse: (response: { data: GetAllProductsDataType }) =>
        response.data,
    }),
    getProductById: builder.query<
      GetProductByIDDataType,
      { productId: number }
    >({
      query: ({ productId }) => ({
        url: `v1/products/${productId}`,
        method: 'GET',
        transformResponse: (response: { data: GetProductByIDDataType }) =>
          response.data,
      }),
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => 'v1/products/get-all-categories',
      transformResponse: (response: { data: string[] }) => response.data,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
} = productApiSlice;
