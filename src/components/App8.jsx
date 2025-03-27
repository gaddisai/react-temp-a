import React, { useState, useEffect } from "react";
import "./App8.css";
function App8() {   
    const [a, setA] = useState();

    const [numbers, setNumbers] = useState([]);
    const [total, setTotal] = useState(0);
    const handleSubmit = () => {

        const num=Number(a);
        setNumbers([...numbers, num]);
        
        setA('')
    };
    useEffect(() => {
        setTotal(numbers.reduce((sum, value) => 
            sum + Number(value), 0));
    }, [a]);
    return (
        <div className="bottom_content8">
            <h2>This is App8</h2>
            <p>
                <input
                    type="number"
                    placeholder="Enter num"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />
           
            <button onClick={handleSubmit}>ADD</button> </p>
            <p>Numbers:{numbers.join(',')}</p>
            <p>Total:{total}</p>
        </div>
    );
}
export{App8}