import { styled } from '@styles/index';

export const Container = styled('section', {
  backgroundColor: '$black',
  textAlign: ' center',
  padding: '80px 0',

  '@bpDesktop': {
    padding: '140px 0',
  },
});

export const CardWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '24px',
  marginTop: '80px',

  '@bpDesktop': {
    gap: '40px',
  },
});
