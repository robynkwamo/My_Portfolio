import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppContext from './AppContext';
import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Work from './components/work';
import Resume from './components/resume';
import ReservationModule from './components/rsvpModule/ReservationModule';
import ReservationInfo from './components/rsvpModule/ReservationInfo';

const App = () => {
  const [stateContext, setstateContext] = useState();

  return (
    <AppContext.Provider value={{ stateContext, setstateContext }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/armelle&robyshower" element={<ReservationModule />} />
          <Route path="/armelle&robyshower/rsvp" element={<ReservationInfo />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
