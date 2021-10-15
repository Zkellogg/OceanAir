import React from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import "../CSS/Navbar.css"
import "../CSS/Review.css"
import SeaProperty from "./SeaProperty";


function BaseLayoutProperty(props){
    return(
        <div className="BaseProperty-Container">
            <Navbar/>
            <div>
            {props.children}
            <SeaProperty />
            </div>
            <Review/>
        </div>
    )
}

export default BaseLayoutProperty