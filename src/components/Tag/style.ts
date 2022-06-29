import { styled } from '@styles/index';

export const Tag = styled('div', {
  backgroundColor: '$black3',
  color: '$offWhite',
  fontSize: '$base',
  display: 'inline-flex',
  gap: '16px',
  alignItems: 'center',
  padding: '21px 20px 21px 32px',
  position: 'relative',
  width: '290px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  svg: {
    marginLeft: 'auto',
  },

  variants: {
    hasShadow: {
      true: {
        backgroundColor: '$black4',
        boxShadow: '12px 8px 10px #030303',
      },
    },
  },

  '@bpTablet': {
    fontSize: '$medium',
    width: '340px',
    padding: '25px 20px 25px 40px',
  },
});

export const GradientBlock = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  width: '30%',
  backgroundImage:
    'linear-gradient(270deg, #181818 53.65%, rgba(24, 24, 24, 0.6) 100%);',
});
