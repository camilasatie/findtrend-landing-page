import Image from 'next/image';
import { useWindowSize } from 'react-use';
import { Button } from '@styles/components/Button';
import { Tag } from '../Tag';
import Arrow from '../../../public/images/arrow-white.svg';
import BackgroundMobile from '../../../public/images/background-mobile.png';
import BackgroundDesktop from '../../../public/images/background-desktop.png';

import * as S from './style';

export function Header() {
  const { width } = useWindowSize();
  return (
    <S.Header>
      <S.BgWrapper>
        <Image
          alt="Mountains"
          src={width > 375 ? BackgroundDesktop : BackgroundMobile}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </S.BgWrapper>

      <S.Title>Minimize your tabs. Find the trends!</S.Title>

      <S.Paragraph>
        Don't let your computer memories consumes all of those browswer tabs.
        Findtrend let you gathers all your favorites website into one place.
      </S.Paragraph>

      <S.ButtonWrapper>
        <Button color="primary" className="btnHeader">
          Get Started 🔥
        </Button>

        <S.ArrowTopContainer>
          All research start from here
          <S.ArrowRight>
            <Image src={Arrow} alt="arrow" />
          </S.ArrowRight>
        </S.ArrowTopContainer>
      </S.ButtonWrapper>

      <S.TagsWrapper>
        <Tag socialMedia="twitter" hasShadow className="twitter">
          Criptopunk-Search
        </Tag>
        <Tag socialMedia="pinterest" hasShadow className="pinterest">
          Popular Design-Se
        </Tag>
        <Tag socialMedia="facebook" hasShadow className="facebook">
          Product Design-Se
        </Tag>
        <Tag socialMedia="dribbble" hasShadow className="dribbble">
          Elon Musk-Search
        </Tag>
      </S.TagsWrapper>
    </S.Header>
  );
}
