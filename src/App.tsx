import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainRoute } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
};

export default App;
