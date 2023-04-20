import { useGetProductByIdQuery } from '@apis/ProductApi';
import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery({
    productId: Number(params?.productId),
  });
  console.log(
    '🚀 ~ file: ProductDetails.tsx:10 ~ ProductDetails ~ data:',
    data
  );
  return <div>ProductDetails</div>;
};
