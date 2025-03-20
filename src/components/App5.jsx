import {useState} from 'react';
import './App5.css';
function App5(){
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState();
    const buttonSubmit=()=>{
        setTodos([...todos,task]);
    }
    const handleDelete=(task)=>{
        setTodos(todos.filter((value)=>value!==task));
    }
    return (
        <>
        <div className="bottom_content5">
            <h2>This is App5</h2>
            <p><input type="text" placeholder="Enter task" onChange={(e)=>setTask(e.target.value)}></input></p>
            <button onClick={buttonSubmit}>Submit</button>
            <hr/>
            {todos.map((value,index)=>(
                <li key={index}>
                    {value}-<button onClick={()=>handleDelete(value)}>Delete</button>
                </li>
            ))}
        </div>
        </>
    );
}
export {App5}