import { styled } from '@styles/index';

export const Container = styled('section', {
  backgroundColor: '$grey6',
  textAlign: 'center',
  padding: '80px 0',

  '@bpTablet': {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '140px 0',
  },
});

export const SocialMediaContainer = styled('div', {
  display: 'flex',
  gap: '16px',
  overflowX: 'scroll',
  flexWrap: 'nowrap',
  width: '100%',
  padding: '0 18px 32px',

  '@bpTablet': {
    justifyContent: 'center',
    paddingBottom: '77px',
  },
});

export const SocialCard = styled('div', {
  backgroundColor: '$offWhite',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  height: '60px',
  minWidth: '60px',
  width: '60px',
  padding: '12px',

  '&:nth-child(2)': {
    backgroundColor: '$primary',
  },

  '@bpTablet': {
    height: '124px',
    minWidth: '124px',
    padding: '32px',
  },
});

export const TwitterContainer = styled('div', {
  display: 'grid',
  gap: '16px',
  padding: '0 18px',
  margin: '0 auto 32px',

  '@bpTablet': {
    gap: '40px',
    maxWidth: '800px',
    marginBottom: '80px',
  },
});
