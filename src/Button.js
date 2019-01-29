import React from  'react'

function Button(props) {
    return(
        <button onClick={props.onClick}>{props.cat}</button>
    ) 
}

export default Button