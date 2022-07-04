import { Button } from '@styles/components/Button';
import { H2 } from '@styles/components/Headings';
import * as S from './style';

export function JoinUs() {
  return (
    <S.Container>
      <H2 color="black" textAlign="center" hasMarginBottom>
        Join us on email for <S.Highlight>more trending topics</S.Highlight>
      </H2>
      <Button color="secondary" isSmall>
        Join Now
      </Button>
    </S.Container>
  );
}
