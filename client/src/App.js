import React from 'react';
import { DaysContainer, HoursContainer } from './container';
import './App.css';

function App() {
  return (
    <div className="weather__position">
      <div className="weather__position-container">
        <DaysContainer />
        <HoursContainer />
      </div>
    </div>
  );
}

export default App;
