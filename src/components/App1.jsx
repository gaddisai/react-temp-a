import './App1.css';
import styles from './App1.module.css';
import React from 'react';

function App1(){
    const myStyle={
        color: "red",
        backgroundColor: "yellow"
    }
    return (
        <>
            <div className="bottom_content1">
                <h2 >This is App1</h2><br/>
                <p style={myStyle}>HIi srujanaa how are youu</p><br/>
                <p style={{backgroundColor:'yellow',color:'red'}}>Hii deepesh how are you</p>
                <p className={styles.txtPara}>This is gowri shankar</p>
            </div>
        </>
    )
}
export {App1}