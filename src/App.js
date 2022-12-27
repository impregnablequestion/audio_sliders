import React, {useState} from 'react';
import './App.css';
import Osc1 from "./components/Osc1.js"

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

function App() {

  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: 0,
    type: "sine"
  });


  const changeOsc1 = (e) => {
    let {value, id} = e.target;
    setOsc1Settings({...osc1Settings, [id]: value});
    osc1[id].value = value;
  }

  const changeOsc1Type = (e) => {
    let {id} = e.target;
    console.log(id);
    setOsc1Settings({...osc1Settings, type: id});
    osc1.type = id;
  }

  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={() => {osc1.start()}}>start osc</button>
      <button onClick={() => {osc1.stop()}}>stop osc1</button>
      <Osc1 change={changeOsc1} settings={osc1Settings} changeType={changeOsc1Type}></Osc1>
    </div>
  );
}

export default App;
