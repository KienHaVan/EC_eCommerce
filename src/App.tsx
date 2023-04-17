import { theme } from '@styles/theme.styles';
import { HomePage } from '@views/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
