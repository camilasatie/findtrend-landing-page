import { Button } from '@styles/components/Button';
import { Tag } from '../Tag';
import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <S.Title>Minimize your tabs. Find the trends!</S.Title>
      <S.Paragraph>
        Don't let your computer memories consumes all of those browswer tabs.
        Findtrend let you gathers all your favorites website into one place.
      </S.Paragraph>
      <Button color="primary">Get Started 🔥</Button>
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
