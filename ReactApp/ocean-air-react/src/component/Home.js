import React from "react";
import "../CSS/Home.css";
import SignIn from "./SignIn";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div className="homepage-container">
      <div className="imageDiv">
        <SignIn 
        isSignInClicked={props.isSignInClicked}
        isSignUpClicked={props.isSignUpClicked}
        />
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    isSignInClicked:state.isSignInActive,
    isSignUpClicked:state.isSignUpActive
  }
}

export default connect(mapStateToProps)(Home);
