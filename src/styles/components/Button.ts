import { styled } from '@styles/index';

export const Button = styled('button', {
  borderRadius: '50px',
  fontSize: '$base',
  fontWeight: '600',
  border: '0',
  padding: '16px 32px',
  cursor: 'pointer',

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$black',
        '&:hover': {
          filter: 'brightness(0.95)',
        },
      },
      secondary: {
        backgroundColor: '$black',
        color: '$offWhite',
        '&:hover': {
          backgroundColor: '$grey1',
        },
      },
    },
    isSmall: {
      true: {
        fontSize: '$smalll',
        padding: '12px 24px',

        '@bpTablet': {
          fontSize: '$base',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
