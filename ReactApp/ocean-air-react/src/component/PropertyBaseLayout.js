import React from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import "../CSS/Navbar.css"
import "../CSS/Review.css"
import Property from "./Property";
import {connect} from "react-redux"

function BaseLayoutProperty(props){
    return(
        <div className="BaseProperty-Container">
            <Navbar/>
            <div>
            {props.children}
            <Property />
            </div>
            {props.isAuth? <Review/>:null}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
      isAuth:state.isAuthen
    }
}

export default connect(mapStateToProps)(BaseLayoutProperty)