import { Images } from '@assets/index';
import { CategoryHeader } from '@components/CategoryHeader';
import { Typography } from '@mui/material';
import {
  StyledBoxContainer,
  StyledButton,
  StyledDivider,
  StyledText,
} from '@styles/components/CategoryBar/CategoryBar';
import { theme } from '@styles/theme.styles';

const list = [
  'Computer',
  'Hand Tools',
  'Machine Tools',
  'Power Tools',
  'Storage Tools',
  'Clothes & PPE',
  'Electrical',
  'Building Tools',
  'Foods',
  'Drinks',
];

export const CategoryBar = () => {
  return (
    <StyledBoxContainer>
      <CategoryHeader color={theme.palette.common.white} size="medium" />
      <StyledDivider></StyledDivider>
      {list.map((item, index) => (
        <StyledButton key={index}>
          <StyledText>{item}</StyledText>
          <img src={Images.RIGHT} alt="" color={theme.palette.common.white} />
        </StyledButton>
      ))}
    </StyledBoxContainer>
  );
};
