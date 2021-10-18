import React from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import SignIn from "./SignIn";
import "../CSS/Navbar.css";
import "../CSS/Review.css";
import Property from "./Property";
import { connect } from "react-redux";

function BaseLayoutProperty(props) {
  return (
    <div className="BaseProperty-Container">
      <Navbar />
      <div id="BaseProperty-div">
        <SignIn
          isSignInClicked={props.isSignInClicked}
          isSignUpClicked={props.isSignUpClicked}
        />
        {props.children}
        {/* <Property /> */}
      </div>
      {props.isAuth ? <Review /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuthen,
    isSignInClicked: state.isSignInActive,
    isSignUpClicked: state.isSignUpActive,
  };
};

export default connect(mapStateToProps)(BaseLayoutProperty);
