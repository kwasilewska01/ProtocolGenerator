import React from 'react';
import './App.scss';
import Collapse from './components/ui/Collapse';
import Navbar from './components/ui/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Collapse />
    </React.Fragment>
  );
}

export default App;
