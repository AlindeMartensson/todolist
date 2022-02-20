import React from "react";
import styles from "./list.module.css";

function List(props) {

    console.log(props);

   



    return (

        <div className={styles.items}>


        {props.listItem.map((item,i) => {
        return (
        <div>
        
        <div 
        onClick={() => props.makeRed(i)}
        style={{ color: item.red ? "red" : "#000000" }}>
            
        {item.name} 
        
        </div>


        <button type="text" onClick={() => props.remove(item.id)}  >X</button>  

        </div>
        
        )
        }
        )
        }

        </div>
    )

        
    
};

export default List;