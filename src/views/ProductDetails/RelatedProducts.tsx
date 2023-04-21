import { Images } from '@assets/index';
import { Box, Button, Divider, Typography } from '@mui/material';
import { theme } from '@styles/theme.styles';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useGetAllProductsQuery } from '@apis/ProductApi';
import { ProductCard } from '@components/ProductCard';

export const RelatedProducts = () => {
  const { data: allProducts, error, isLoading } = useGetAllProductsQuery({});
  return (
    <Box
      sx={{
        marginTop: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          width: '100%',
        }}
      >
        <Typography fontWeight={700} fontSize="24px" lineHeight="28px">
          Related Products
        </Typography>
        <div
          style={{
            height: '2px',
            width: '100%',
            flex: 1,
            display: 'block',
            backgroundColor: theme.palette.common.GREY_400,
            borderRadius: '60px',
          }}
        ></div>
        <Button
          className="center"
          sx={{
            width: '26px',
            height: '26px',
            borderRadius: '5px',
            backgroundColor: theme.palette.common.GREY_300,
            minWidth: 'unset',
          }}
        >
          <img src={Images.RELATEDLEFT} alt="" />
        </Button>
        <Button
          className="center"
          sx={{
            width: '26px',
            height: '26px',
            borderRadius: '5px',
            backgroundColor: theme.palette.common.GREY_300,
            minWidth: 'unset',
          }}
        >
          <img src={Images.RELATEDRIGHT} alt="" />
        </Button>
      </Box>
      <Box sx={{ width: '100%', overflow: 'hidden', marginBottom: '20px' }}>
        <Swiper slidesPerView={4} spaceBetween={30} className="mySwiper">
          {allProducts?.result.map((item) => (
            <SwiperSlide>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
