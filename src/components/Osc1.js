import React, {useContext} from "react";
import {CTX} from "../context/Store"

const Osc1 = () => {

    const [appState, updateState] = useContext(CTX);

    const change = (e) => {
        let {id, value} = e.target;
        updateState({type: "CHANGE_OSC1", payload: {id, value}})
    }

    const changeType = (e) => {
        let {id} = e.target;
        updateState({type: "CHANGE_OSC1_TYPE", payload: {id}})
    }

    let {type, frequency, detune} = appState.osc1Settings;

    return(
        <div className="control">
            <h2>osc1</h2> 
            <button onClick={() => {updateState({type: "START_OSC1"})}}>start osc</button>
            <button onClick={() => {updateState({type: "STOP_OSC1"})}}>stop osc1</button>
            <div className="param">
                <h3>frequency</h3>
                <input onChange={change}
                value={frequency}
                min="40"
                max="5000"
                type="range"
                id="frequency"/>    
            </div>
            <br></br>
            <div className="param">
                <h3>detune</h3>
                <input onChange={change}
                value={detune}
                min="-50"
                max="50"
                type="range"
                id="detune"/>
            </div>
            <div className="param">
                <h3>wave</h3>
                <button id="sine" onClick={changeType} className={`${type==="sine"? "active" : null }`}>sine</button>
                <button id="triangle" onClick={changeType} className={`${type==="triangle"? "active" : null }`}>triangle</button>
                <button id="square" onClick={changeType} className={`${type==="square"? "active" : null }`}>square</button>
                <button id="sawtooth" onClick={changeType} className={`${type==="sawtooth"? "active" : null }`}>saw</button>
            </div>
        </div>
    );
}

export default Osc1;