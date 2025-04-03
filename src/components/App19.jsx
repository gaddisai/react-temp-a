import React from 'react'
import { useState } from 'react'
import { fromJS } from 'immutable';
import './App19.css'
function App19() {
    const [user, setUser] = useState(fromJS({ name: "John", score: 80 }));
    const updateScore = () => {
      const updatedUser = user.set("score", 95);
      setUser(updatedUser);
    };
    return (
      <div className='bottom_content19'>
        <h2>User Profile</h2>
        <p>Name: {user.get("name")}</p>
        <p>Score: {user.get("score")}</p>
        <button onClick={updateScore}>Change Score</button>
      </div>
    );
}
export{App19}