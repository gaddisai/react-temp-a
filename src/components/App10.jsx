import React from "react";

function App10() {
    const [msg,setMsg]=useState(0);
    const handleSubmit=()=>{
        setMsg('Submitted Successfully');
    }
    return (
        <div className="bottem_content10">
            <input type="number" onChange={(e)=>setMsg(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            <hr></hr>
            <p>{msg}</p>
        </div>

    )
}   
export{App10}