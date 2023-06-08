import React from 'react';
import { MainRouter } from '../navigation/MainRouter';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <MainRouter />
  </ThemeProvider>
);

export default App;
