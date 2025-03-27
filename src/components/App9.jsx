import React, { useRef } from "react";
import "./App9.css";
import { useState } from "react";

function App9() {
    const [color, setColor] = useState();
    const txtRef=useRef();
    const handleSubmit=()=>{
        txtRef.current.style.color=color;
    }
    return (
        <div className="bottem_content9">
            <input type="text" onChange={(e)=>setColor(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            <h2 ref={txtRef}>Hello World</h2>
        </div>
    )
}

export{App9}