import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../images/OceanAirLogoB_Locations_600x200.png";
import "../../CSS/Navbar.css";
import { connect } from "react-redux";

function NavBarComp(props) {

  const handleSignIn=()=>{
    if(props.isSignInClicked){
      props.OnSignInClicked(false)
    }else{
      props.OnSignInClicked(true)
    }
  }

  const handleSignUp=()=>{
    if(props.isSignUpClicked){
      props.OnSignUpClicked(false)
    }else{
      props.OnSignUpClicked(true)
    }
  }

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
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://oceanair.guestybookings.com/listings/5ffcaed496912b002f0ec7e7">Book 30A Seagrove Beach, FL</Nav.Link>
              <Nav.Link href="https://oceanair.guestybookings.com/listings/5fa03839d8c9cd002f4a90e6">Book Pompano Beach, FL</Nav.Link>
              <Nav.Link href="https://oceanair.guestybookings.com/listings/5fc519821b8cf2002f1dbf83">Book Myrtle Beach , SC</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>
              <Nav.Link onClick={handleSignIn} href="#">Sign In</Nav.Link>
              <Nav.Link onClick={handleSignUp} href="#">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    isSignInClicked:state.isSignInActive,
    isSignUpClicked:state.isSignUpActive
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    OnSignInClicked:(isClicked)=>dispatch({type:'ON_SIGNINBTN_CLICKED',payload:isClicked}),
    OnSignUpClicked:(isClicked)=>dispatch({type:'ON_SIGNUPBTN_CLICKED',payload:isClicked})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBarComp);
