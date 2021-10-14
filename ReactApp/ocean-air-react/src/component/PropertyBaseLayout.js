import React from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import "../CSS/Navbar.css"
import "../CSS/Review.css"
import Property from "./Property";


function BaseLayoutProperty(props){
    return(
        <div className="BaseProperty-Container">
            <Navbar/>
            <div>
            {props.children}
            <Property />
            </div>
            <Review/>
        </div>
    )
}

export default BaseLayoutProperty