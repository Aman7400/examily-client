import './index.css';

import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import themeOptions from '../src/utils/theme';

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
