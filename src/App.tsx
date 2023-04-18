import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
