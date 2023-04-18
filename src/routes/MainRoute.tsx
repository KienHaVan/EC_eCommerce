import { ErrorPage } from '@views/ErrorPage';
import { Home } from '@views/Home';
import { Layout } from '@views/Layout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
