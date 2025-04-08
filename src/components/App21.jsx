//MOUNTING,UPDATING,UNMOUNTING CONCEPTS LEARNED IN REACT
import React, { useEffect, useState } from 'react'
import './App21.css'
function App21(){
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("component mounted",count);
      return () => {
        console.log("Component unmounted");
      };
    }
    , [count]);
    // when the component is mounted, it will log "component mounted" and the current count value.
    const handleUpdate = () => {
        setCount(count + 1);
        console.log("Component updated");
        }
    return (
      <div className='bottom_content21'>
        <h3>This is App21</h3>
        <button onClick={handleUpdate}>Click</button>
        <br/>
        {count} 
      </div>
    )
}
export {App21}
