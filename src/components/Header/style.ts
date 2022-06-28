import { styled } from '@styles/index';

export const Header = styled('header', {
  backgroundColor: '$black',
  textAlign: 'center',
  paddingTop: '144px',
});

export const Title = styled('h1', {
  color: '$offWhite',
  maxWidth: '300px',
  margin: '0 auto',
});

export const Paragraph = styled('p', {
  color: '$grey2',
  lineHeight: '1.5',
  maxWidth: '300px',
  padding: '16px 0 32px',
  margin: '0 auto',
});

export const TagsWrapper = styled('div', {
  padding: '60px 0 40px',

  '.twitter': {
    transform: 'rotate(-4deg)',
  },

  '.pinterest': {
    transform: 'rotate(2deg)',
  },
  '.facebook': {
    transform: 'rotate(-2deg)',
  },
  '.dribbble': {
    transform: 'rotate(4deg)',
  },
});
