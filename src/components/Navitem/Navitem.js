import React from "react";
import "./Navitem.css"

const Navitem = (props) => {
    return(
        <a className="item" href="/">{props.name}</a>
    )
}




export default Navitem