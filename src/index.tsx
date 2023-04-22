import store from '@store/store';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles/theme.styles';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Provider } from 'react-redux';
import LoadingModal from '@components/LoadingModal/LoadingModal';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LoadingModal />
    </ThemeProvider>
  </Provider>
);
