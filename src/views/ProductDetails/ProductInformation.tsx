import { Images } from '@assets/index';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { theme } from '@styles/theme.styles';
import {
  StyledBoxBelow,
  StyledBoxContainer,
  StyledBranchBox,
  StyledBranchText,
  StyledColorBox,
  StyledColorLabel,
  StyledCouponBox,
  StyledPriceBox,
  StyledQuantityBox,
  StyledQuantityButton,
  StyledQuantityButtonGroup,
  StyledQuantityText,
  StyledRatingBox,
  StyledSwiperDownImg,
} from '@styles/views/ProductDetails/ProductInfomation';
import { useState } from 'react';
import SwiperCore, { FreeMode, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

const colorList = [
  {
    id: 1,
    color: '#006CFF',
  },
  {
    id: 2,
    color: '#FC3E39',
  },
  {
    id: 3,
    color: '#171717',
  },
  {
    id: 4,
    color: '#FFF600',
  },
];

export const ProductInformation = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [colorChosen, setColorChosen] = useState(1);
  console.log(
    '🚀 ~ file: ProductInformation.tsx:51 ~ ProductInformation ~ colorChosen:',
    colorChosen
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Swiper
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
          style={{
            aspectRatio: 1,
            border: '1px solid #000000',
            borderRadius: '5px',
          }}
        >
          {new Array(7).fill(0).map((item, index) => (
            <SwiperSlide>
              <img
                src={`https://swiperjs.com/demos/images/nature-${
                  index + 1
                }.jpg`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
          style={{ marginTop: '20px', height: '87px' }}
        >
          {new Array(7).fill(0).map((item, index) => (
            <SwiperSlide
              style={{
                width: '87px',
                border: '1px solid #000000',
                borderRadius: '5px',
              }}
            >
              <StyledSwiperDownImg
                src={`https://swiperjs.com/demos/images/nature-${
                  index + 1
                }.jpg`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item xs={7}>
        <StyledBoxContainer>
          <Typography fontWeight={700} fontSize="40px" lineHeight="47px">
            SHOES ADIDAS ULTRABOOST 21
          </Typography>
          <StyledRatingBox>
            <Rating name="read-only" value={5} readOnly />
            <Divider orientation="vertical" flexItem />
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.secondary.main}
            >
              150 Reviews
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.secondary.main}
            >
              3k Sold
            </Typography>
          </StyledRatingBox>
          <Typography fontWeight={400} fontSize="16px" lineHeight="19px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ornare, mi in ornare elementum, libero nibh lacinia urna, quis
            convallis lorem erat at purus. Maecenas eu varius nisi
          </Typography>
          <Divider sx={{ margin: '20px 0' }} />
          <StyledBranchBox>
            <StyledBranchText
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              Availability:
              <Typography
                fontWeight={700}
                fontSize="16px"
                lineHeight="19px"
                color={theme.palette.common.green}
              >
                In Stock
              </Typography>
            </StyledBranchText>
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              Brand: Adiddas
            </Typography>
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              SKU: 83690/32
            </Typography>
          </StyledBranchBox>
          <StyledPriceBox>
            <Typography fontWeight={700} fontSize="32px" lineHeight="38px">
              $ 120.00
            </Typography>
            <StyledCouponBox>
              <Typography
                fontWeight={700}
                fontSize="16px"
                lineHeight="19px"
                color={theme.palette.common.red}
              >
                50% Off
              </Typography>
            </StyledCouponBox>
          </StyledPriceBox>
          <StyledBoxBelow>
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              Select Color:
            </Typography>
            <StyledColorBox>
              {colorList.map((item) => (
                <StyledColorLabel>
                  <input
                    id={item.id.toString()}
                    type="radio"
                    style={{ display: 'none' }}
                    value={colorChosen}
                    checked={item.id === colorChosen}
                    onChange={() => setColorChosen(item.id)}
                  />
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: item.color,
                      borderRadius: '100%',
                      boxShadow:
                        item.id === colorChosen
                          ? `0 0 0 2.5px white, 0 0 0 5px ${item.color}`
                          : '0 0 0 5px white',
                    }}
                  ></div>
                </StyledColorLabel>
              ))}
            </StyledColorBox>
          </StyledBoxBelow>
          <StyledBoxBelow>
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              Quantity:
            </Typography>
            <StyledQuantityBox>
              <StyledQuantityButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                color="info"
              >
                <Button>
                  <Typography
                    fontWeight={700}
                    fontSize="30px"
                    lineHeight="19px"
                  >
                    -
                  </Typography>
                </Button>

                <StyledQuantityText className="center">2</StyledQuantityText>
                <Button>
                  <Typography
                    fontWeight={700}
                    fontSize="30px"
                    lineHeight="19px"
                  >
                    +
                  </Typography>
                </Button>
              </StyledQuantityButtonGroup>
              <StyledQuantityButton variant="contained">
                <img src={Images.CARTPLUS} alt="" />
                <Typography>Add to cart</Typography>
              </StyledQuantityButton>
            </StyledQuantityBox>
          </StyledBoxBelow>
          <StyledBoxBelow>
            <Typography
              fontWeight={700}
              fontSize="16px"
              lineHeight="19px"
              color={theme.palette.common.GREY_500}
            >
              Rate:
            </Typography>
            <Rating
              name="simple-controlled"
              value={5}
              size="large"
              sx={{ marginTop: '8px' }}
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
          </StyledBoxBelow>
        </StyledBoxContainer>
      </Grid>
    </Grid>
  );
};
