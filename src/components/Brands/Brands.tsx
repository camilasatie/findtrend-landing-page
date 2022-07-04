import Image from 'next/image';
import { H2 } from '@styles/components/Headings';
import { brandsImage } from './data';
import * as S from './style';

export function Brands() {
  const rennderBrands = () => (
    <S.CardContainer>
      {brandsImage.map((image) => (
        <S.Card key={image.name}>
          <Image src={image.file} alt={image.name} key={image.name} />
        </S.Card>
      ))}
    </S.CardContainer>
  );

  return (
    <S.Container>
      <H2 color="black">
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load,{' '}
        <S.Highlight>
          an application that can fulfill your daily browsing needs.
        </S.Highlight>
      </H2>

      <S.BrandsContainer>
        <H2 textAlign="center" color="black">
          Findtrend make +1000 Startup grow
        </H2>
        {rennderBrands()}
      </S.BrandsContainer>
    </S.Container>
  );
}
