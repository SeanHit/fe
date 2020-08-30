import React from 'react';
import './App.css';
import Clock from './pages/lifeCycle/Clock'
import Event from './pages/Event'
import BoilingVerdict from './pages/statePromotion/BoilingVerdict.jsx'
import Context from './pages/context'
import REF from './pages/refs'

function App() {
  return (
    <div className="App">
      <REF />
    </div>
  );
}

export default App;
