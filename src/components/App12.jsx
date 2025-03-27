import React from "react";
import { useNavigate } from "react-router-dom";
import "./App12.css";

function App12() {
    const navigate = useNavigate();

    function handleSubmit1() {
        navigate("/child1");
    }

    function handleSubmit2() {
        navigate("/child2");
    }

    return (
        <div className="bottom_content12">
            <h2>This is App12</h2>
            <button onClick={handleSubmit1}>child1</button>
            <button onClick={handleSubmit2}>child2</button>
        </div>
    );
}
export { App12 };