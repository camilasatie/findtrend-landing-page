import { styled } from '@styles/index';

export const Container = styled('section', {
  backgroundColor: '$offWhite',
  padding: '80px 18px',

  '@bpTablet': {
    maxWidth: '1440px',
    margin: '0 auto',
  },
});

export const Highlight = styled('span', {
  color: '$grey3',
});

export const BrandsContainer = styled('div', {
  paddingTop: '160px',
});

export const CardContainer = styled('div', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px',
  paddingTop: '32px',

  '@bpTablet': {
    gridTemplateColumns: 'repeat(4, 1fr);',
    gap: '32px',
    paddingTop: '80px',
  },
});

export const Card = styled('div', {
  backgroundColor: '$grey4',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '74px',
  padding: '10% 20%',

  '@bpTablet': {
    height: '100px',
  },

  '@bpDesktop': {
    height: '120px',
  },
});
