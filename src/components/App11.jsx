import React from "react";
import { useNavigate } from "react-router-dom";
function App11(){
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/app5');
    }
    return(
        <div className="bottom_content11">
            <h3>This is App11</h3>
            <button onclick={handleSubmit}>Goto App5</button>
        </div>
    )
}
export{App11}