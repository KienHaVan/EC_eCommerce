import apiSlice from '@apis/apiSlice';
import {
  GetAllCategoriesResponseType,
  GetAllProductsDataType,
  GetAllProductsParamsType,
  GetAllProductsResponseType,
} from './types';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      GetAllProductsDataType,
      GetAllProductsParamsType
    >({
      query: (args) => ({
        url: 'v1/products',
        params: args,
      }),
      transformResponse: (response: { data: GetAllProductsDataType }) =>
        response.data,
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => 'v1/products/get-all-categories',
      transformResponse: (response: { data: string[] }) => response.data,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } =
  productApiSlice;
