import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";
import logo from "../images/OceanAirLogoB_Locations_600x200.png";
import "../CSS/CheckIn.css";
import "../CSS/Footer.css";

function CheckIn() {
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
            <button
              onClick={handleRoutePrevious}
              type="button"
              className="btn btn-outline-secondary"
              id="back-btn"
            >
              Back to Previous
            </button>
          </Navbar>
          <h1 className="checkin-header">Check-In Instructions</h1>
          <a className="arrow-div">
            <a
              onClick={handleRoutePrevious}
              type="button"
              className="btn btn-outline-secondary"
              id="back-btn-mobile"
            >
              Back
            </a>
            <div className="arrow arrow-first"></div>
            <div className="arrow arrow-second"></div>
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
              When you arrive, you will see the sign out front of the parking
              area identifying the property. Please feel free to park diagonally
              along either side of the parking area. We have space for every
              unit to have a maximum of two cars. Please use the unloading area
              right in front of the house for a maximum of 30 min as we have
              other guests checking in as well.
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
              The entrance to the beachfront units is located on the left-hand
              side of the house. The door to the Apartment is the door on the
              left front of the house if you are looking from the parking area.
              Once you enter the door you will go up one or two floors if
              staying in a beachfront unit and your door will be directly to the
              left or right (You should have recieved more detailed instructions
              via email or text). There is a smart lock on the door, you will
              receive the door-code 3 hours prior to check-in. Again, feel free
              to park right in front of the house to unload your bags.
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
              If you are not in your unit, please make sure the doors are closed
              and locked. If you are enjoying the day with the doors open in
              your unit, please make sure the AC is turned off as it will freeze
              up the compressor and you might not have any cold air for some
              time after that.
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
              Please do not hesitate at all to contact me at{" "}
              <a>zac@visitoceanair.com</a> or at (770) 548-9020. Make sure to
              check out the other sections of our site as well as make an
              account for a 5% discount on all future stays and to recieve
              coupons for discounted stays coming up!
            </span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default CheckIn;
