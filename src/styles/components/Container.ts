import { styled } from '@styles/index';

export const Container = styled('main', {
  margin: '0 auto',

  '@bpTablet': {
    maxWidth: '1440px',
    margin: '0 auto',
  },
});
