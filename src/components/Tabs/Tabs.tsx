import Image from 'next/image';
import { H2 } from '@styles/components/Headings';
import { Tag } from '../Tag';
import Arrow from '../../../public/images/arrow.svg';
import * as S from './style';

export function Tabs() {
  return (
    <S.Container>
      <H2 textAlign="center" hasShadow>
        Open new tabs is sh*t
      </H2>
      <S.TagContainer>
        <S.ArrowTopContainer>
          You just need one tab now
          <S.ArrowRight>
            <Image src={Arrow} alt="arrow" />
          </S.ArrowRight>
        </S.ArrowTopContainer>

        <S.ArrowBottomContainer>
          <S.ArrowLeft>
            <Image src={Arrow} alt="arrow" />
          </S.ArrowLeft>
          solution for discover a trend
        </S.ArrowBottomContainer>
        <Tag socialMedia="findtrend">Findtrend - Elon</Tag>
      </S.TagContainer>
      <S.Paragraph>
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </S.Paragraph>
    </S.Container>
  );
}
