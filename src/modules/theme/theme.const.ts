import { createTheme } from '@mui/material/styles';
import { COLORS } from './colors.const';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    white: {
      main: COLORS.white,
    },
    black: {
      main: COLORS.black,
    },
    accent: {
      main: COLORS.accent,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1280,
    },
  },
});
