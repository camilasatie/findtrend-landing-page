import { Button } from '@styles/components/Button';
import { H3 } from '@styles/components/Headings';
import * as S from './style';

interface ICard {
  planName: string;
  planDescription: string;
  planType: string;
  planPrice: number;
  planList: {
    item: string;
  }[];
  isRecommended?: boolean;
}

export function Card({
  planName,
  planDescription,
  planPrice,
  planList,
  planType,
  isRecommended,
}: ICard) {
  return (
    <S.Container isRecommended={isRecommended}>
      <H3>{planName}</H3>
      <p>{planDescription}</p>
      <S.Divider />

      <S.PriceWrapper>
        <S.Price>${planPrice}</S.Price>
        <span>/{planType}</span>
      </S.PriceWrapper>

      <S.List>
        {planList.map((item) => (
          <S.ListItem key={item.item}>{item.item}</S.ListItem>
        ))}
      </S.List>

      <Button color={isRecommended ? 'secondary' : 'primary'} isSmall fullWidth>
        Start Free Trial
      </Button>
    </S.Container>
  );
}
