import Image from 'next/image';
import { Button } from '@styles/components/Button';
import { H2 } from '@styles/components/Headings';
import { socialMedia, tweets } from './data';

import * as S from './style';

export function Platform() {
  return (
    <S.Container>
      <H2 textAlign="center" hasMarginBottom>
        All platform connect to Findtrend
      </H2>

      <S.SocialMediaContainer>
        {socialMedia.map((social) => (
          <S.SocialCard>
            <Image
              src={social.image}
              alt={social.name}
              objectFit="contain"
              className="socialImage"
            />
          </S.SocialCard>
        ))}
      </S.SocialMediaContainer>

      <S.TwitterContainer>
        {tweets.map((tweet) => (
          <Image
            src={tweet.image}
            alt={tweet.name}
            layout="responsive"
            className="tweetImg"
          />
        ))}
      </S.TwitterContainer>

      <Button color="secondary" isSmall>
        View More Trend
      </Button>
    </S.Container>
  );
}
