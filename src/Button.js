import React from  'react'

function Button(props) {

    return(
        <button className = { props.selected } onClick={props.onClick}>{props.cat}</button>
    ) 
}

export default Button