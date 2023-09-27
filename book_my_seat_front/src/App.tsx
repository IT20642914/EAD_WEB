import React from 'react';
import AppRoutes from './Routes';
import { ThemeProvider } from '@mui/material';
import { PrimaryTheme } from './assets/theme/theme';
function App() {
  return (
    <div >

<ThemeProvider theme={PrimaryTheme}>
       
      <AppRoutes />
    
    </ThemeProvider>
    </div>
  );
}

export default App;
