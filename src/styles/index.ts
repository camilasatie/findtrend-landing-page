import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#A8FF35',
      green2: '#87D322',
      buttonHover: '#8CC83A',
      black: '#000',
      black2: '#2B2B2B',
      grey1: '#545454',
      grey2: '#8B8B8B',
      grey3: '#ADADAD',
      grey4: '#F5F5F5',
      grey5: '#F1F1F1',
      offWhite: '#fff',
    },
    fonts: {
      mono: 'Raleway, sans-serif',
      handwritting: 'Architects Daughter, cursive',
    },
    fontWeights: {
      regular: '400',
      semiBold: '600',
      bold: '700',
      black: '900',
    },
    fontSizes: {
      base: '1.125rem',
      smalll: '0.875rem',
      medium: '1.5rem',
      large: '2rem', //36
      xlarge: '4rem',
    },
  },
  media: {
    bpMobile: '(min-width: 480px)',
    bpTablet: '(min-width: 760px)',
    bpDesktop: '(min-width: 1440px)',
  },
});
