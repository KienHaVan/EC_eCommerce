import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
