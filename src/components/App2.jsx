import './App2.css';
import { useState } from 'react';
import './App2.css';
function App2() {
    const [count, setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <>
        <div className="bottom_content2">
            <h2>This is App2</h2>
            <button onClick={decrement}>-</button> {count} <button onClick={increment}>+</button>
        </div>
    </>
  );
}
export {App2}