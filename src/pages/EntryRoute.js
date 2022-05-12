import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage.js';
import Write from './write/Write.js';

const EntryRoute = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default EntryRoute;
