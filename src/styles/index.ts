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
      grey1: '#8B8B8B',
      grey2: '#ADADAD',
      grey3: '#F5F5F5',
      grey4: '#F1F1F1',
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
      large: '2.25rem',
      xlarge: '4.5rem',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 760px)',
    bp3: '(min-width: 1440px)',
  },
});
