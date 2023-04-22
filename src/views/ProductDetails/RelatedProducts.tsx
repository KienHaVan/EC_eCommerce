import { Images } from '@assets/index';
import { Box, Button, Divider, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useGetAllProductsQuery } from '@apis/ProductApi';
import { ProductCard } from '@components/ProductCard';
import { nanoid } from '@reduxjs/toolkit';
import {
  StyledBoxContainer,
  StyledBoxHeader,
  StyledContentBox,
  StyledLineHeader,
  StyledNextButton,
  StyledPreviousButton,
} from '@styles/views/ProductDetails/RelatedProducts';

export const RelatedProducts = () => {
  const { data: allProducts, error, isLoading } = useGetAllProductsQuery({});
  return (
    <StyledBoxContainer>
      <StyledBoxHeader>
        <Typography fontWeight={700} fontSize="24px" lineHeight="28px">
          Related Products
        </Typography>
        <StyledLineHeader />
        <StyledPreviousButton className="center my-swiper-button-prev">
          <img src={Images.RELATEDLEFT} alt="" />
        </StyledPreviousButton>
        <StyledNextButton className="center my-swiper-button-next">
          <img src={Images.RELATEDRIGHT} alt="" />
        </StyledNextButton>
      </StyledBoxHeader>
      <StyledContentBox>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper"
          navigation={{
            prevEl: '.my-swiper-button-prev',
            nextEl: '.my-swiper-button-next',
          }}
          modules={[Navigation]}
        >
          {allProducts?.result.map((item) => (
            <SwiperSlide key={nanoid()}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledContentBox>
    </StyledBoxContainer>
  );
};
