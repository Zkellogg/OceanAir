import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/OceanAirLogoB_Locations_600x200.png";
import "../CSS/CheckIn.css";
import "../CSS/Activities.css";
import Footer from "./Footer";
import oldFloridia from "../images/oldFloridaFishHouse.jpg";
import steamboat from "../images/Steamboat-Grill.jpg";
import perfectPig from "../images/perfectpig.jpg";
import brunos from "../images/brunospizza.jpg";

function RestaurantsSR() {
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
              class="btn btn-outline-secondary"
              id="back-btn"
            >
              Back to Previous
            </button>
          </Navbar>
          <h1 className="checkin-header">Owner's Restaurant Suggestions</h1>
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
      <div className="body-container" id="activities-container">
        <ul>
          <li id="activities-li">
            <div>
              <h1 className="checkin-headers" id="activity-header">
                Old Floridia Fish House
              </h1>
              <img
                height="auto"
                width="500rem"
                src={oldFloridia}
                alt="Restaurant Image"
              />
              <h5>33 Heron's Watch Way, Santa Rosa Beach, FL 32459</h5>
              <h5>(850) 534-3045</h5>
            </div>
            <div>
              <span>
                Old Florida soul in the heart of 30A, nestled on Eastern Lake
                showcasing coastal flair. Whether you are looking for lunch with
                a view, a sushi experience like no other, or a traditional Old
                Florida fresh seafood dinner, they have something for everyone.
              </span>
              <br />
              <span>
                The wait can be a little long and the service a little slow
                especially depending on the season and how busy they are. But
                the food is absolutly amazing!
              </span>
            </div>
          </li>
          <li id="activities-li">
            <div>
              <h1 className="checkin-headers" id="activity-header">
                Steamboat Grill
              </h1>
              <img
                height="auto"
                width="500rem"
                src={steamboat}
                alt="Restaurant Image"
              />
              <h5>4935 E County Hwy 30A, Santa Rosa Beach, FL 32459</h5>
              <h5>(850) 213-3167</h5>
            </div>
            <div>
              <span>
                Local spot - Tavern/bar with wide selection of food, from
                burgers and wings to steaks and seafood. Something for everyone,
                including a full bar and outside patio dining.
              </span>
            </div>
          </li>
          <li id="activities-li">
            <div>
              <h1 className="checkin-headers" id="activity-header">
                Perfect Pig Grill and Fish House
              </h1>
              <img
                height="auto"
                width="500rem"
                src={perfectPig}
                alt="Restaurant Image"
              />
              <h5>4281 E County Highway, Santa Rosa Beach, FL 32459</h5>
              <h5>(850) 213-0701</h5>
            </div>
            <div>
              <span>
                Gourmet Southern Food with a Twist. The Perfect Pig Grill and
                Fish House features fresh local grouper for dinner,
                award-winning pulled pork for lunch and hand sliced applewood
                smoked bacon for breakfast.
              </span>
            </div>
          </li>
          <li id="activities-li">
            <div>
              <h1 className="checkin-headers" id="activity-header">
                Bruno’s Pizza
              </h1>
              <img
                height="auto"
                width="500rem"
                src={brunos}
                alt="Restaurant Image"
              />
              <h5>6652 E County Hwy 30A, Watersound, FL 32461</h5>
              <h5>(850) 231-1699</h5>
            </div>
            <div>
              <span>
                Our favorite pizza around! Great staff and owners. Yummy food
                and cold beer!
              </span>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantsSR;
