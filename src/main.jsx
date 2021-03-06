import './index.css';

import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './redux/store';
import themeOptions from '../src/utils/theme';

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <SnackbarProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </SnackbarProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
