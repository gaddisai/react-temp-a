import {useState} from 'react';
import './App3.css';
function App3() {
    const [email,setEmail]=useState();
    const [password,setPass]=useState();
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email=="sai@gmail.com" && password=="12345"){
            setMsg(`Welcome Sai, Your Email is ${email} and Password is ${password}`);
        }else{
            setMsg('Wrong Email or Password');
        }
    }   
  return (
    <>
    <div className="bottom_content3">
      <h2>This is App3</h2>
      <h2>Login Form</h2>
      <p><input type='text' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}></input></p>
      <p><input type='password' placeholder='Password' onChange={(e)=>setPass(e.target.value)}></input></p>
      <button onClick={handleSubmit}>Submit</button>
      <p>{msg}</p>
    </div>
    </>
  );
}
export {App3}