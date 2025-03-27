import React, { useEffect } from "react";

function App10() {
    const [num,setNum]=useState(0);
    const pRef=useRef();
    const numRef=useRef(0);
    useEffect(()=>{
        if(numRef.current>num){
            pRef.current.style.color='red';
        }
        else{
            pRef.current.style.color='green';
        }
        numRef.current=num;
    },
    [num]);
    return (
        <div className="bottom_content10">
            <input type="number" onChange={(e)=>setNum(e.target.value)}></input>
            <hr></hr>
            <p ref={pRef}>{num}</p>
        </div>

    )
}   
export{App10}