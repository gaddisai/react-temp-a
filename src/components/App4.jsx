import { useState } from "react";
import './App4.css';
function App4(){
    const [user,setUser]=useState();
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
      if(user.email=="sai@gmail.com" && user.password=="12345"){
        setMsg(`Welcome Sai, Your Email is ${email} and Password is ${password}`);
      }else{
        setMsg('Wrong Email or Password');
      }
    }
     return (
       <>
       <div className="bottom_content4">
         <h2>This is App4</h2>
         <h2>Login Form</h2>
         <p><input type='text' placeholder='Email Address' onChange={(e)=>setUser({...user,email: e.target.value})}></input></p>
         <p><input type='password' placeholder='Password' onChange={(e)=>setUser({...user,password: e.target.value})}></input></p>
         <button onClick={handleSubmit}>Submit</button>
          <p>{msg}</p>
       </div>
       </>
    );
}
export {App4}