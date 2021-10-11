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
      <div id="aboutUs" className="aboutUs">
        <h1>
          <strong>About Us</strong>
        </h1>
        <h3> -Our Story- </h3>
        <h5>
          pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
          urna molestie at elementum eu facilisis sed odio morbi quis commodo
          odio aenean sed adipiscing diam et netus et malesuada fames ac turpis
          egestas maecenas pharetra convallis posuere morbi leo urna molestie at
          elementum eu facilisis sed
        </h5>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignInClicked: state.isSignInActive,
    isSignUpClicked: state.isSignUpActive,
  };
};

export default connect(mapStateToProps)(Home);
