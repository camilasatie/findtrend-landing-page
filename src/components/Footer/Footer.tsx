import Image from 'next/image';
import * as S from './style';
import logoDark from '../../../public/images/logo-dark.svg';

export const footerLinks = [
  'Privacy Policy',
  'Terms and Conditions',
  'Contact Us',
  'Careers',
];

export function Footer() {
  return (
    <S.Footer>
      <Image alt="findtrend logo" src={logoDark} />
      <S.Container>
        {footerLinks.map((link) => (
          <S.Link href="#" key={link}>
            {link}
          </S.Link>
        ))}
      </S.Container>
    </S.Footer>
  );
}
