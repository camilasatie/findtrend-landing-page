import { styled } from '@styles/index';

export const Container = styled('div', {
  textAlign: 'left',
  backgroundColor: '$offWhite',
  borderRadius: '16px',
  width: '339px',
  height: '602px',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 32px 24px',
  margin: '0 auto',

  button: {
    marginTop: 'auto',
  },

  variants: {
    isRecommended: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },

  '@bpDesktop': {
    width: '360px',
    height: '640px',
    margin: '0',
  },
});

export const Divider = styled('hr', {
  color: '$black',
  backgroundColor: '$grey3',
  border: 'none',
  height: '1px',
  margin: '24px 0 32px',

  '@bpDesktop': {
    margin: '32px 0',
  },
});

export const PriceWrapper = styled('div', {
  paddingBottom: '24px',

  '@bpDesktop': {
    paddingBottom: '32px',
  },
});

export const Price = styled('span', {
  fontSize: '$xlarge',
  fontWeight: '$semiBold',
  paddingRight: '8px',
});

export const List = styled('ul', {
  listStyle: 'none',
});

export const ListItem = styled('li', {
  '& + li': {
    paddingTop: '27px',
  },

  '&::before': {
    content: 'check',
    fontFamily: '$icons',
    fontSize: '$small',
    paddingRight: '8px',
    verticalAlign: 'middle',
  },
});
