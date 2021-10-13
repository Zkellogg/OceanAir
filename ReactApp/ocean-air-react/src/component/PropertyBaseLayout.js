import React from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import "../CSS/Navbar.css"
import "../CSS/Review.css"

function BaseLayoutProperty(props){
    return(
        <div className="BaseProperty-Container">
            <Navbar/>
            {props.children}
            <Review/>
        </div>
    )
}

export default BaseLayoutProperty