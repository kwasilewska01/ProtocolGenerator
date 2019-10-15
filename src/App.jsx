import React from 'react';
import './App.scss';

import Navbar from './components/ui/Navbar';
import GridDash from './container/GridDash/GridDash.jsx';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <GridDash />
    </React.Fragment>
  );
}

export default App;
