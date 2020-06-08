import React from "react";


const TodoButton = (props) =>{
    return(
        <div>
            <button onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default TodoButton;