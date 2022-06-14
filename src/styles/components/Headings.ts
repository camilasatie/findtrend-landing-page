import { styled } from '@styles/index';

export const H2 = styled('h2', {
  fontFamily: '$mono',
  fontSize: '$large',
  fontWeight: '$black',

  variants: {
    color: {
      black: {
        color: '$black',
      },
      white: {
        color: '$offWhite',
      },
    },
    textAlign: {
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    hasShadow: {
      true: {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    hasMarginBottom: {
      true: {
        marginBottom: '32px',
      },
    },
  },

  '@bpTablet': {
    fontSize: '$xlarge',
  },
});
