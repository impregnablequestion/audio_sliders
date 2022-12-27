
import React, {createContext, useReducer} from "react";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter1 = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter1);
filter1.connect(out)

const CTX = createContext();

export {CTX};

export function reducer(state, action){
    let {id, value} = action.payload || {} ;

    switch(action.type){
        
        case "START_OSC1":
            osc1.start();
            return {...state};
        case "STOP_OSC1":
            osc1.stop();
            return {...state};
        case "CHANGE_OSC1":
            osc1[id].value = value;
            return {...state, osc1Settings: {...state.osc1Settings, [id]: value }}
        case "CHANGE_OSC1_TYPE":
            osc1.type = id;
            return {...state, osc1Settings: {...state.osc1Settings, type: [id]}}
        case "CHANGE_FILTER1":
            filter1[id].value = value;
            return {...state, filter1Settings: {...state.filter1Settings, [id]:value }}
        case "CHANGE_FILTER1_TYPE":
            filter1.type = id;
            return {...state, filter1Settings: {...state.filter1Settings, type: [id]}}
        default:
            console.log("reducer error. action: ", action);
            return {...state}
    }
}

export default function Store(props) {

    const stateHook = useReducer(reducer, {
        osc1Settings: {
            frequency: osc1.frequency.value,
            detune: 0,
            type: "sine"
        },
        filter1Settings: {
            frequency: filter1.frequency.value,
            detune: filter1.detune.value,
            type: filter1.type,
            gain: filter1.gain.value
        }
    });

    return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>
}