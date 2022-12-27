import React, {useContext} from "react";
import { CTX } from "../context/Store";

const Filter = () => {

    const [appState, updateState] = useContext(CTX);

    const {frequency, detune, Q, gain, type} = appState.filter1Settings;

    const change = (e) => {
        let {id, value} = e.target;
        updateState({type: "CHANGE_FILTER1", payload: {id, value}})
    }

    const changeType = (e) => {
        let {id} = e.target;
        updateState({type: "CHANGE_FILTER_TYPE", payload: {id}})
    }

    return(
        <div className="control">
            <h2>filter</h2>
            <div className="param">
                <h3>frequency</h3>
                <input value={frequency} type="range" onChange={change} id="frequency" max="10000"/>
            </div>
            <div className="param">
                <h3>detune</h3>
                <input value={detune} type="range" onChange={change} id="detune" min="-100" max="100"/>
            </div>
            <div className="param">
                <h3>Q</h3>
                <input value={Q} type="range" onChange={change} id="Q" max="12" step="0.1"/>
            </div>
            <div className="param">
                <h3>gain</h3>
                <input value={gain} type="range" onChange={change} id="gain" min="-10" max="10" step="0.1"/>
            </div>
            <div className="param">
                <h3>type</h3>
                <button id="lowpass" onClick={changeType} className={`${type === "lowpass"? "active":null}`}>lowpass</button>
                <button id="highpass" onClick={changeType} className={`${type === "highpass"? "active":null}`}>highpass</button>
                <button id="notch" onClick={changeType} className={`${type === "notch"? "active":null}`}>notch</button>
                <button id="lowshelf" onClick={changeType} className={`${type === "lowshelf"? "active":null}`}>lowshelf</button>
                <button id="highshelf" onClick={changeType} className={`${type === "highshelf"? "active":null}`}>highshelf</button>
            </div>
            
        </div>
    );
}

export default Filter;