import React from 'react'
import { useHistory } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer"
import logo from "../images/OceanAirLogoB_Locations_600x200.png"
import "../CSS/CheckIn.css"
import "../CSS/Footer.css"

function CheckIn() {
    const history = useHistory()
    const handleRoutePrevious = () => {
        history.goBack()
    }
    return (
        <div className="container-fluid" id="checkin-page">
            <div id="header-container">
                <div className="container-fluid" id="header-img" width="150rem" height="500rem">
                    <Navbar id="logo-img" href="/">
                        <a href="/"><img src={logo} width="290rem" height="130rem" className="d-inline-block align-top" id="nav-logo" alt="" /></a>
                        <button onClick={handleRoutePrevious} type="button" class="btn btn-outline-secondary" id="back-btn">Back to Previous</button>
                    </Navbar>
                    <h1 className="checkin-header">Check-In Instructions</h1>
                    <a className="arrow-div">
                    <a onClick={handleRoutePrevious} type="button" class="btn btn-outline-secondary" id="back-btn-mobile">Back</a>
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
                        <h1 className="checkin-headers"><input type="checkbox" id="checkbox-1" />
                            <label for="checkbox-1" id="checkIn-Box">
                                <div id="tick_mark"></div>
                            </label>Step 1</h1>
                        <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</span>
                    </li>
                    <li>
                        <h1 className="checkin-headers"><input type="checkbox" id="checkbox-2" />
                            <label for="checkbox-2" id="checkIn-Box">
                                <div id="tick_mark"></div>
                            </label>Step 2</h1>
                        <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</span>
                    </li>
                    <li>
                        <h1 className="checkin-headers"><input type="checkbox" id="checkbox-3" />
                            <label for="checkbox-3" id="checkIn-Box">
                                <div id="tick_mark"></div>
                            </label>Step 3</h1>
                        <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</span>
                    </li>
                    <li>
                        <h1 className="checkin-headers"><input type="checkbox" id="checkbox-4" />
                            <label for="checkbox-4" id="checkIn-Box">
                                <div id="tick_mark"></div>
                            </label>Step 4</h1>
                        <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                            urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                            aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                            maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                            eu facilisis sed</span>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default CheckIn

