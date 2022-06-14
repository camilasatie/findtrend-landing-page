import { styled } from '@styles/index';

export const Footer = styled('footer', {
  backgroundColor: '$offWhite',
  textAlign: 'center',
  padding: '80px 0',

  '@bpTablet': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 80px',
    margin: '0 auto',
    maxWidth: '1440px',
  },
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '80px',

  '@bpTablet': {
    flexDirection: 'row',
    marginTop: '0',
  },
});

export const Link = styled('a', {
  color: '$black',
  fontSize: '$base',
  textDecoration: 'none',
  display: 'block',

  '& + a': {
    marginTop: '40px',
  },

  '&:hover': {
    color: 'none',
  },

  '@bpTablet': {
    '& + a': {
      marginTop: '0',
      marginLeft: '40px',
    },
  },
});
