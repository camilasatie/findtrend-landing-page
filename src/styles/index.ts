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
      black3: '#030303',
      black4: '#181818',
      grey1: '#545454',
      grey2: '#8B8B8B',
      grey3: '#ADADAD',
      grey4: '#F5F5F5',
      grey5: '#F1F1F1',
      grey6: '#FAFAFA',
      offWhite: '#fff',
    },
    fonts: {
      mono: 'Raleway, sans-serif',
      handwritting: 'Architects Daughter, cursive',
      icons: 'Material Icons',
    },
    fontWeights: {
      regular: '400',
      semiBold: '600',
      bold: '700',
      black: '900',
    },
    fontSizes: {
      smalll: '0.875rem',
      base: '1.125rem',
      medium: '1.5rem',
      large: '2rem',
      giant: '4.5rem',
    },
  },
  media: {
    bpMobile: '(min-width: 480px)',
    bpTablet: '(min-width: 760px)',
    bpDesktop: '(min-width: 1440px)',
  },
});
