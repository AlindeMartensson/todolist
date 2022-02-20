import React from "react";
import styles from "./todoinput.module.css";
import { useState } from "react";
import ReactDOM from 'react-dom';



    function ToDoInput (props) {
        

     
console.log(props);
      
          
    
    return (


    <div className={styles.inputStyle}>
 
    <input type="text"
    value={props.title}
    onChange={props.handleChange}
    ></input>

    <button value={props.title} onClick={props.handleAdd} >Add item</button>

    

    

    </div> )
    };
   
export default ToDoInput;