import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./Footer"
import logo from "../images/OceanAirLogoB_Locations_600x200.png"
import "../CSS/CheckIn.css"
import "../CSS/Footer.css"

function CheckIn() {
    return (
        <div className="container-fluid" id="checkin-page">
            <div id="header-container">
                <div className="container-fluid" id="header-img" width="150rem" height="500rem">
                    <Navbar id="logo-img">
                        <img src={logo} width="290rem" height="130rem" className="d-inline-block align-top" alt="" />
                    </Navbar>
                    <h1 className="checkin-header">Check-In Instructions</h1>
                    <a className="arrow-div" href="#first-step">
                        <div class="arrow arrow-first"></div>
                        <div class="arrow arrow-second"></div>
                    </a>
                </div>
                <div className="container-fluid" id="header-opacity">
                </div>
            </div>
            <div className="body-container" id="first-step">
                <ul>
                    <li>
                        <h1 className="checkin-headers">Step 1.</h1>
                        <p>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</p>
                    </li>
                    <li>
                        <h1 className="checkin-headers">Step 2.</h1>
                        <p>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</p>
                    </li>
                    <li>
                        <h1 className="checkin-headers">Step 3.</h1>
                        <p>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</p>
                    </li>
                    <li>
                        <h1 className="checkin-headers">Step 4.</h1>
                        <p>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</p>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
    )
}

export default CheckIn

