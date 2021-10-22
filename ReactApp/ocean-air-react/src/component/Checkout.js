import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Footer from "./Footer";
import logo from "../images/OceanAirLogoB_Locations_600x200.png";
import "../CSS/CheckIn.css";
import "../CSS/Footer.css";

function Checkout() {
  const history = useHistory();
  const handleRoutePrevious = () => {
    history.goBack();
  };
  return (
    <div className="container-fluid" id="checkin-page">
      <div id="header-container">
        <div
          className="container-fluid"
          id="header-img"
          width="150rem"
          height="500rem"
        >
          <Navbar id="logo-img" href="/">
            <a href="/">
              <img
                src={logo}
                width="290rem"
                height="130rem"
                className="d-inline-block align-top"
                id="nav-logo"
                alt=""
              />
            </a>
            <a
              onClick={handleRoutePrevious}
              type="button"
              class="btn btn-outline-secondary"
              id="back-btn"
            >
              Back to Previous
            </a>
          </Navbar>
          <h1 className="checkin-header">Check-Out Instructions</h1>
          <a className="arrow-div">
            <a
              onClick={handleRoutePrevious}
              type="button"
              class="btn btn-outline-secondary"
              id="back-btn-mobile"
            >
              Back
            </a>
            <div class="arrow arrow-first"></div>
            <div class="arrow arrow-second"></div>
          </a>
        </div>
        <div className="container-fluid" id="header-opacity"></div>
      </div>
      <div className="body-container" id="first-step">
        <ul>
          <li>
            <h1 className="checkin-headers">
              <input type="checkbox" id="checkbox-1" />
              <label for="checkbox-1" id="checkIn-Box">
                <div id="tick_mark"></div>
              </label>
              Step 1
            </h1>
            <span>
              Please make sure all trash is taken to the containers at the end
              of the street (Not the large dumpster!).{" "}
            </span>
          </li>
          <li>
            <h1 className="checkin-headers">
              <input type="checkbox" id="checkbox-2" />
              <label for="checkbox-2" id="checkIn-Box">
                <div id="tick_mark"></div>
              </label>
              Step 2
            </h1>
            <span>
              Please put any dirty dishes in the dishwasher and run it if you
              have detergent left.
            </span>
          </li>
          <li>
            <h1 className="checkin-headers">
              <input type="checkbox" id="checkbox-3" />
              <label for="checkbox-3" id="checkIn-Box">
                <div id="tick_mark"></div>
              </label>
              Step 3
            </h1>
            <span>
              Please close and lock any exterior doors and double check that you
              have not left any valuables. If you do leave something in a unit
              let us know as soon as possible and we will do our absolute best
              to get it back to you.
            </span>
          </li>
          <li>
            <h1 className="checkin-headers">
              <input type="checkbox" id="checkbox-4" />
              <label for="checkbox-4" id="checkIn-Box">
                <div id="tick_mark"></div>
              </label>
              Step 4
            </h1>
            <span>
              Leave a review both on our site and on a booking channel (VRBO,
              Airbnb) if you used one! Remember to make an account here on our
              website for discounts on all future stays. We can't wait for you
              to stay with us again soon!
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
