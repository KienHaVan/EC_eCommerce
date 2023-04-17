import { theme } from '@styles/theme.styles';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Home } from '@views/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
