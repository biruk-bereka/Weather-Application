import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from '../routes/Details';
import Home from '../routes/Home';

const WeatherApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:id" element={<Details />} />
  </Routes>
);

export default WeatherApp;
