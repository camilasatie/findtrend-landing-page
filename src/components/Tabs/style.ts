import { styled } from '@styles/index';

export const Container = styled('section', {
  backgroundColor: '$primary',
  padding: '80px 0',
  textAlign: 'center',

  '@bpTablet': {
    padding: '140px 0',
  },
});

export const ArrowTopContainer = styled('div', {
  fontFamily: '$handwritting',
  fontSize: '$smalll',
  display: 'inline-flex',
  flexDirection: 'column',
  width: '130px',
  position: 'absolute',
  top: '-60px',
  right: '-6px',
  transform: 'rotate(10deg)',

  '@bpDesktop': {
    top: '60px',
    right: '-140px',
  },
});

export const ArrowRight = styled('div', {
  transform: 'scaleX(-1)',
  marginRight: '28px',

  '@bpDesktop': {
    transform: 'rotate(90deg)',
    marginRight: '48px',
  },
});

export const ArrowBottomContainer = styled('div', {
  fontFamily: '$handwritting',
  fontWeight: 'bold',
  fontSize: '$smalll',
  display: 'inline-flex',
  flexDirection: 'column',
  width: '130px',
  position: 'absolute',
  bottom: '-65px',
  left: '-14px',

  '@bpDesktop': {
    bottom: '65px',
    left: '-144px',
    transform: 'rotate(10deg)',
  },
});

export const ArrowLeft = styled('div', {
  transform: 'rotate(240deg)',
  marginRight: '0px',
  marginBottom: '6px',

  '@bpDesktop': {
    transform: 'rotate(270deg)',
    marginLeft: '30px',
  },
});

export const TagContainer = styled('div', {
  display: 'inline-block',
  backgroundColor: '$grey4',
  borderRadius: '14px',
  padding: '24px',
  margin: '90px auto',
  position: 'relative',

  '@bpDesktop': {
    padding: '60px 80px',
    margin: '60px auto',
  },
});

export const Paragraph = styled('p', {
  lineHeight: '1.5',
  padding: '0 30px',
  margin: '0 auto',
  maxWidth: '650px',

  '@bpDesktop': {
    fontSize: '1.25rem',
    maxWidth: '860px',
  },
});
