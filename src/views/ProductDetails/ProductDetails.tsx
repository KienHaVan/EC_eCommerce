import { useGetProductByIdQuery } from '@apis/ProductApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbsProduct } from './BreadcrumbsProduct';
import { ProductInformation } from './ProductInformation';
import { InfoAndReviews } from './InfoAndReviews';
import { WriteReview } from './WriteReview';
import { RelatedProducts } from './RelatedProducts';
import { decodeData, decryptData } from '@utils/cryptData';
import { useAppDispatch } from '@store/store';
import {
  setCurrentProduct,
  setCurrentReview,
} from '@store/slices/productSlice';
import {
  handleCloseGlobalLoading,
  handleOpenGlobalLoading,
} from '@store/slices/statusSlice';

export const ProductDetails = () => {
  const params = useParams();
  const [productId, setProductId] = useState(0);
  useEffect(() => {
    // const productId = Number(decodeData(params.productId));
    const productId = Number(params.productId);
    setProductId(productId);
  }, [params]);
  const { data, error, isLoading } = useGetProductByIdQuery(
    {
      productId,
    },
    {
      skip: productId === 0,
    }
  );
  useEffect(() => {
    if (isLoading) {
      dispatch(handleOpenGlobalLoading());
    } else {
      dispatch(handleCloseGlobalLoading());
    }
  }, [isLoading]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setCurrentProduct(data.product));
      dispatch(setCurrentReview(data.reviews));
    }
  }, [data]);

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
