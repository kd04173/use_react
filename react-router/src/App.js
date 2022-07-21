import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path={['/about', '/info']} element={About} />
      <Route path="/profile/:username" component={Profile} />
    </Routes>
  );
};

export default App;
