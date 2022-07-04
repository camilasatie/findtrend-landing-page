import IconClose from '../../../public/images/icon-close.svg';
import Image from 'next/image';
import FacebookIcon from '../../../public/images/social-1.png';
import TwitterIcon from '../../../public/images/social-2.png';
import DribbleIcon from '../../../public/images/social-3.png';
import PinterestIcon from '../../../public/images/social-4.png';
import FindtrendIcon from '../../../public/images/findtrend-logo.png';

import * as S from './style';

type TSocialMedia =
  | 'dribbble'
  | 'facebook'
  | 'pinterest'
  | 'twitter'
  | 'findtrend';

interface ITag {
  className?: string;
  hasShadow?: boolean;
  children: React.ReactNode;
  socialMedia?: TSocialMedia;
}

export function Tag({ className, children, hasShadow, socialMedia }: ITag) {
  function setSocialMediaIcon(socialType: TSocialMedia) {
    const socialICons = {
      facebook: FacebookIcon,
      twitter: TwitterIcon,
      pinterest: PinterestIcon,
      findtrend: FindtrendIcon,
      dribbble: DribbleIcon,
    };

    return socialICons[socialType];
  }

  return (
    <S.Tag hasShadow={hasShadow} className={className}>
      {socialMedia && (
        <Image
          src={setSocialMediaIcon(socialMedia)}
          alt="close icon"
          height={31}
          width={31}
        />
      )}
      {children}
      <S.GradientBlock />
      <Image src={IconClose} alt="close icon" />
    </S.Tag>
  );
}
