import React from 'react';
import { DaysContainer, HoursContainer, Footer } from './container';
import './App.css';

function App() {
  return (
    <div className="weather__position">
      <div className="weather__position-container">
        <DaysContainer />
        <HoursContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
