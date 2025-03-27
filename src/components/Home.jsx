import React from "react";

function Home(props) {
    return (
        <div className="bottom_content_home">
            <h2>This is Home</h2>
            <p>{props.name} loves {props.loves}</p>
        </div>
    );
}
export{Home}