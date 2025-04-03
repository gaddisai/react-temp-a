import React from 'react'
import { useState } from 'react'
import './App17.css'
import { Child } from './Child'
function App17() {
    const [count, setCount] = useState(0);
    const hrs = new Date().getMinutes();
    return (
      <div className='bottom_content17'>
        <h3>This is App17</h3>
        <Child hrs={hrs} />
        <hr></hr>
        <p><button onClick={()=>setCount(count+1)}>Click</button></p>
        {count}
      </div>
    );
}

export {App17}
