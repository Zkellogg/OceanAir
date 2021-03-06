import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../images/OceanAirLogoB_Locations_600x200.png";
import "../../CSS/Navbar.css";
import { connect } from "react-redux";

function NavBarComp(props) {

  const handleSignIn = () => {
    if (props.isSignInClicked) {
      props.OnSignInClicked(false);
    } else {
      props.OnSignInClicked(true);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("jsonwebtoken");
  };

  const handleSignUp = () => {
    if (props.isSignUpClicked) {
      props.OnSignUpClicked(false);
    } else {
      props.OnSignUpClicked(true);
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="info"
        variant="dark"
        className="navbarMain"
        fixed="top"

        // style={{background-color: #9292b0}}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="350rem"
              height="150rem"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/30A-Seagrove-Beach">
                30A Seagrove Beach, FL
              </Nav.Link>
              <Nav.Link href="/Pompano-Beach">Pompano Beach, FL</Nav.Link>
              <Nav.Link href="/Myrtle-Beach">
                Myrtle Beach , SC
              </Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#aboutUs">About Us</Nav.Link> */}
              {props.isAuth ? null : (
                <Nav.Link onClick={handleSignIn} href="#login-container">
                  Sign In
                </Nav.Link>
              )}
              {props.isAuth ? null : (
                <Nav.Link onClick={handleSignUp} href="#signup-container">
                  Sign Up
                </Nav.Link>
              )}
              {props.isAuth ? (
                <Nav.Link href="/myaccount">My Account</Nav.Link>
              ) : null}
              {props.isAuth ? (
                <Nav.Link onClick={handleSignOut} href="/">
                  Sign Out
                </Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

const mapDispatchToProps = (dispatch) => {
  return {
    OnSignInClicked: (isClicked) =>
      dispatch({ type: "ON_SIGNINBTN_CLICKED", payload: isClicked }),
    OnSignUpClicked: (isClicked) =>
      dispatch({ type: "ON_SIGNUPBTN_CLICKED", payload: isClicked }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComp);
