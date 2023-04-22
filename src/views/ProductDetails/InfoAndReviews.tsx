import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { theme } from '@styles/theme.styles';
import { CustomerReview } from './CustomerReview';
import { Divider, Pagination, Stack } from '@mui/material';
import {
  StyledBoxContainer,
  StyledTab,
  StyledTabs,
} from '@styles/views/ProductDetails/InfoAndReviews';
import {
  selectCurrentProduct,
  selectCurrentReview,
} from '@store/slices/productSlice';
import { useAppSelector } from '@store/store';
import { GetProductByIDReviewsResultType } from '@apis/ProductApi/types';
import { ReviewResultType, ReviewType } from '@appTypes/product.types';
import { nanoid } from '@reduxjs/toolkit';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TAB = {
  DESCRIPTION: 0,
  SPECIALIZATION: 1,
  REVIEWS: 2,
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const reviewPerPage = 3;

export const InfoAndReviews = () => {
  const product = useAppSelector(selectCurrentProduct);
  const review = useAppSelector(selectCurrentReview);
  const [value, setValue] = React.useState(1);
  const [pagination, setPagination] = React.useState(1);
  // const [reviews, setReviews] = React.useState<ReviewResultType[]>([]);

  // React.useEffect(() => {
  //   if (review?.result) {
  //     setReviews(
  //       review?.result.slice(
  //         (pagination - 1) * reviewPerPage,
  //         pagination * reviewPerPage
  //       )
  //     );
  //   }
  // }, [pagination]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPagination(value);
  };
  return (
    <StyledBoxContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Description" {...a11yProps(TAB.DESCRIPTION)} />
          <StyledTab
            label="Scpecification"
            {...a11yProps(TAB.SPECIALIZATION)}
          />
          <StyledTab label="Reviews" {...a11yProps(TAB.REVIEWS)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={TAB.DESCRIPTION}>
        <Typography fontWeight={700} fontSize="28px" lineHeight="33px">
          {product?.description}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={TAB.SPECIALIZATION}>
        <Typography fontWeight={700} fontSize="28px" lineHeight="33px">
          {product?.description}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={TAB.REVIEWS}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            fontWeight={700}
            fontSize="28px"
            lineHeight="33px"
            sx={{ margin: '24px 0' }}
          >
            Customer Reviews
          </Typography>
          {review?.result
            .slice((pagination - 1) * reviewPerPage, pagination * reviewPerPage)
            .map((review) => (
              <Box key={nanoid()}>
                <CustomerReview review={review} />
                <Divider sx={{ margin: '6px 0' }} />
              </Box>
            ))}
          <Stack
            spacing={2}
            margin="20px 0"
            marginX={'auto'}
            alignSelf="center"
          >
            <Pagination
              count={Math.ceil((review?.total as number) / reviewPerPage) || 1}
              color="primary"
              page={pagination}
              shape="rounded"
              onChange={handleChangePagination}
            />
          </Stack>
        </Box>
      </TabPanel>
    </StyledBoxContainer>
  );
};
