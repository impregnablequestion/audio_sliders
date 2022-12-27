import React, {useState} from 'react';
import './App.css';
import Osc1 from "./components/Osc1.js"

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

osc1.type = "triangle";

function App() {

  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value);

  const changeOsc1Freq = (e) => {
    console.log(e.target.value)
    let {value} = e.target;
    setOsc1Freq(value);
    osc1.frequency.value=value;
  }

  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={() => {osc1.start()}}>start osc</button>
      <button onClick={() => {osc1.stop()}}>stop osc1</button>
      <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq}></Osc1>
    </div>
  );
}

export default App;
