import { useGetProductByIdQuery } from '@apis/ProductApi';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbsProduct } from './BreadcrumbsProduct';
import { ProductInformation } from './ProductInformation';
import { InfoAndReviews } from './InfoAndReviews';
import { WriteReview } from './WriteReview';
import { RelatedProducts } from './RelatedProducts';

export const ProductDetails = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery({
    productId: Number(params?.productId),
  });
  return (
    <>
      <BreadcrumbsProduct />
      <ProductInformation />
      <InfoAndReviews />
      <WriteReview />
      <RelatedProducts />
    </>
  );
};
