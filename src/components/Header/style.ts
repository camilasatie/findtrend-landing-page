import { styled } from '@styles/index';

export const BgWrapper = styled('div', {
  position: 'fixed',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  zIndex: '-1',
});

export const Header = styled('header', {
  textAlign: 'center',
});

export const Title = styled('h1', {
  color: '$offWhite',
  fontSize: '$large',
  fontWeight: '$black',
  maxWidth: '350px',
  paddingTop: '144px',
  margin: '0 auto',

  '@bpTablet': {
    fontSize: '$giant',
    maxWidth: '700px',
  },
});

export const Paragraph = styled('p', {
  color: '$grey2',
  fontSize: '$base',
  lineHeight: '1.5',
  maxWidth: '300px',
  padding: '16px 0 32px',
  margin: '0 auto',

  '@bpTablet': {
    maxWidth: '650px',
    padding: '24px 0 40px',
  },
});

export const ButtonWrapper = styled('div', {
  position: 'relative',
  display: 'inline-block',
});

export const ArrowTopContainer = styled('div', {
  display: 'none',

  '@bpTablet': {
    color: '$offWhite',
    fontFamily: '$handwritting',
    fontSize: '$smalll',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '130px',
    position: 'absolute',
    top: '-12px',
    right: '-120px',
    transform: 'rotate(10deg)',
    maxWidth: '110px',
  },
});

export const ArrowRight = styled('div', {
  '@bpTablet': {
    marginTop: '10px',
    marginRight: '48px',
  },
});

export const TagsWrapper = styled('div', {
  position: 'relative',
  padding: '60px 0 40px',
  margin: '0 auto',

  '@bpTablet': {
    height: `360px`,
    maxWidth: '740px',
  },
  '@bpDesktop': {
    maxWidth: '1076px',
  },

  '.twitter': {
    transform: 'rotate(-4deg)',
    zIndex: '3',

    '@bpTablet': {
      position: 'absolute',
      bottom: '154px',
      left: '24px',
    },
    '@bpDesktop': {
      bottom: '154px',
      left: '0px',
    },
  },

  '.pinterest': {
    transform: 'rotate(2deg)',
    zIndex: '2',

    '@bpTablet': {
      position: 'absolute',
      bottom: '86px',
      left: '60px',
    },
    '@bpDesktop': {
      bottom: '98px',
      left: '200px',
    },
  },

  '.facebook': {
    transform: 'rotate(-2deg)',
    zIndex: '1',

    '@bpTablet': {
      position: 'absolute',
      bottom: '153px',
      right: '24px',
    },
    '@bpDesktop': {
      bottom: '153px',
      left: '500px',
    },
  },

  '.dribbble': {
    transform: 'rotate(4deg)',

    '@bpTablet': {
      position: 'absolute',
      transform: 'rotate(8deg)',
      bottom: '72px',
      right: '24px',
    },
    '@bpDesktop': {
      transform: 'rotate(4deg)',
      bottom: '91px',
      right: '0px',
    },
  },
});
