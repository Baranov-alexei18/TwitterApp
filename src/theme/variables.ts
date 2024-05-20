export const COLOR = {
  dark: '#000000',
  light: '#FFFFFF',
  primary: '#1DA1F2',
  lightGrey: '#C4C4C4',
  lightGrey1: '#EFF3F4',
  darkGrey: '#909090',
  error: '#FF0000',
  success: '#8AE564',
  likeColor: '#EF1C5C',
};

export const FONT_SIZE = {
  xxs: '12px',
  xs: '14px',
  sm: '16px',
  md: '18px',
  xl: '20px',
};

export const WEIGHT = {
  xs: '400',
  sm: '500',
  md: '600',
  lg: '700',
  xl: '800',
  xxl: '900',
};

export const SPACING = {
  zero: '0',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '28px',
  xxl: '32px',
  xxxl: '36px',
  xxxxl: '40px',
};

export const BORDER_RADIUS = {
  xxs: '6px',
  md: '16px',
  xl: '42px',
  circle: '50%',
};

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const Z_INDEX = {
  xs: 1,
  sm: 10,
  md: 100,
  xl: 1000,
  xxl: 10000,
};

export const themes = {
  colors: { ...COLOR },
  fontSizes: { ...FONT_SIZE },
  fontWeights: { ...WEIGHT },
  spacing: { ...SPACING },
  radius: { BORDER_RADIUS },
  breakpoints: { BREAKPOINTS },
  zIndex: { Z_INDEX },
};
