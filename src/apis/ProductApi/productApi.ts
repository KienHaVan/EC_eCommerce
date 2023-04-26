import apiSlice from '@apis/apiSlice';
import {
  CreateReviewForProductRequestType,
  CreateReviewForProductResponseType,
  GetAllCategoriesResponseType,
  GetAllProductsDataType,
  GetAllProductsParamsType,
  GetAllProductsResponseType,
  GetProductByIDDataType,
  GetProductByIDResponseType,
  SearchProductDataType,
  SearchProductResponseType,
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
      }),
      transformResponse: (response: { data: GetProductByIDDataType }) =>
        response.data,
      providesTags: (result, error, arg) => [
        {
          type: 'Product',
          id: arg.productId,
        },
      ],
    }),
    createReviewForProduct: builder.mutation<
      CreateReviewForProductResponseType,
      CreateReviewForProductRequestType
    >({
      query: (data) => ({
        url: `/v1/products/${data.productId}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: 'Product',
          id: arg.productId,
        },
      ],
    }),
    searchProducts: builder.query<SearchProductDataType, { keyWord: string }>({
      query: ({ keyWord }) => ({
        url: `v1/search?keyword=${keyWord}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: SearchProductDataType }) =>
        response.data,
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
  useCreateReviewForProductMutation,
  useSearchProductsQuery,
  useGetAllCategoriesQuery,
} = productApiSlice;
