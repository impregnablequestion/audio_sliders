import React from "react";

const Osc1 = ({changeFreq, freq}) => {

    return(
        <div className="osc1">
            <input onChange={changeFreq}
            value={freq}
            min="40"
            max="5000"
            type="range" id="frequency"></input>
        </div>
    );
}

export default Osc1;