import React from 'react';
import AppRoutes from './Routes';
import { ThemeProvider } from '@mui/material';
import { PrimaryTheme } from './assets/theme/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <>
       <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />
       <AppRoutes />
      </>
   
  );
}

export default App;
