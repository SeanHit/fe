import React from 'react';
import './App.css';
import Clock from './pages/lifeCycle/Clock'
import Event from './pages/Event'
import BoilingVerdict from './pages/statePromotion/BoilingVerdict.jsx'

function App() {
  return (
    <div className="App">
      <BoilingVerdict />
    </div>
  );
}

export default App;
