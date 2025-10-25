import React from 'react';
import Home from './pages/Home';
import Studio from './pages/Studio';
import MasterSearch from './pages/apps/MasterSearch';

function App() {
  const path = window.location.pathname;

  if (path === '/studio') {
    return <Studio />;
  }

  if (path === '/apps/mastersearch') {
    return <MasterSearch />;
  }

  return <Home />;
}

export default App;
