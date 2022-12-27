import React from "react";

const Osc1 = ({change, settings, changeType}) => {

    let {type, frequency, detune} = settings;

    return(
        <div className="control">
            <h2>osc1</h2> 
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