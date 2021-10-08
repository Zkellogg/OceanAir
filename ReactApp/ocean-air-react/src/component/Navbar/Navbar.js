import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../images/OceanAirLogoB_Locations_600x200.png";
import "../../CSS/Navbar.css";

function NavBarComp() {
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
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#features">Book 30A Seagrove Beach, FL</Nav.Link>
              <Nav.Link href="#pricing">Book Pompano Beach, FL</Nav.Link>
              <Nav.Link href="#pricing">Book Myrtle Beach , SC</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>
              <Nav.Link href="#memes">Sign-In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
