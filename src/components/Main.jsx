import React from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
function Main(props){
    if (props.c=="a"){
        return <Child1 />
    }else{
        return <Child2 />
    }

    
}
export{Main}