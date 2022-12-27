import React from 'react';
import './App.css';
import Osc1 from "./components/Osc1.js"
import Filter from './components/Filter';

function App() {

  return (
    <div className="App">
      <h1>Sliders</h1>
      <Osc1></Osc1>
      <Filter ></Filter>
    </div>
  );
}

export default App;
