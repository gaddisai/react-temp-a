import React from "react";
import { useState ,useEffect} from "react";
function App7() {  
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const [res,setRes]=useState(0);
      useEffect(()=>
      {
        setRes(parseInt(a)+parseInt(b));
      },[a]);
      useEffect(()=>
      {
        setRes(parseInt(a)*parseInt(b));
      },[b]);

  return (
    <div className="bottom_content7"><h3>this is app7</h3>
    <p><input type="number" placeholder='Enter A' onChange={(e)=>setA(e.target.value)}/></p>
    <p><input type="number" placeholder='Enter B' onChange={(e)=>setB(e.target.value)} /></p>
    {/* <p><button onClick={handleSubmit}>Submit</button></p> */}
   
    <p>{res}</p>
    </div>
  )
}
export{App7}