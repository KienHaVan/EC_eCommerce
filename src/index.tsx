import { ThemeProvider } from '@mui/material';
import { theme } from '@styles/theme.styles';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
