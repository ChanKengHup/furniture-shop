/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss';
import { COLOR } from './src/app/styles/color';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: COLOR.brand['500'],
        brandPrimaryDark: COLOR.brand['600'],
        brandPrimary: COLOR.brand['500'],
        brandPrimaryLight: COLOR.brand['300'],
        primaryOnLight: COLOR.grayscale['900'],
        secondaryOnLight: COLOR.grayscale['700'],
        tertiaryOnDark: COLOR.grayscale['600'],
        tertiaryOnLight: COLOR.grayscale['300'],
        primaryOnDark: COLOR.grayscale.white,
        secondaryOnDark: COLOR.grayscale['200'],
        border: {
          tertiaryOnDark: COLOR.grayscale['500'],
          tertiaryOnLight: COLOR.grayscale['400'],
        },
        text: {
          tertiaryOnDark: COLOR.grayscale['500'],
          tertiaryOnLight: COLOR.grayscale['400'],
        },
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans Variable', ...fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
