import { ThemesType } from '@/types/theme';

export const THEME = {
  DARK: 'dark' as ThemesType,
  LIGHT: 'light' as ThemesType,

  COLOR: {
    dark: '#000000',
    light: '#FFFFFF',
    primary: '#1DA1F2',
    lightGrey: '#C4C4C4',
    lightGrey1: '#EFF3F4',
    darkGrey: '#909090',
    error: '#FF0000',
    success: '#8AE564',
    likeColor: '#EF1C5C',
  },

  FONT_SIZE: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    xl: '20px',
  },

  WEIGHT: {
    xs: '400',
    sm: '500',
    md: '600',
    lg: '700',
    xl: '800',
    xxl: '900',
  },

  SPACING: {
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
  },

  BORDER_RADIUS: {
    xxs: '6px',
    md: '16px',
    xl: '42px',
    circle: '50%',
  },

  BREAKPOINTS: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },

  Z_INDEX: {
    xs: 1,
    sm: 10,
    md: 100,
    xl: 1000,
    xxl: 10000,
  },

};
