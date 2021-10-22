import React from 'react'
import { useHistory } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import logo from "../images/OceanAirLogoB_Locations_600x200.png"
import "../CSS/CheckIn.css"
import "../CSS/Activities.css"
import Footer from './Footer'

function RestaurantsSR() {
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
                    <h1 className="checkin-header">Owner's Restaurant Suggestions</h1>
                    <a className="arrow-div">
                        <a onClick={handleRoutePrevious} type="button" class="btn btn-outline-secondary" id="back-btn-mobile">Back</a>
                        <div class="arrow arrow-first"></div>
                        <div class="arrow arrow-second"></div>
                    </a>
                </div>
                <div className="container-fluid" id="header-opacity">
                </div>
            </div>
            <div className="body-container" id="activities-container">
                <ul>
                    <li id="activities-li">
                        <div>
                            <h1 className="checkin-headers" id="activity-header">Restaurant #1</h1>
                            <img height="auto" width="500rem" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a2/4b/11/fun-place.jpg?w=1200&h=-1&s=1" alt="Restaurant Image" />
                            <span>Address</span>
                            <span>Phone #</span>
                        </div>
                        <div>
                            <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                                urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                                aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                                maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                                eu facilisis sed</span>
                        </div>
                    </li>
                    <li id="activities-li">
                        <div>
                            <h1 className="checkin-headers" id="activity-header">Restaurant #2</h1>
                            <img height="auto" width="500rem" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a2/4b/11/fun-place.jpg?w=1200&h=-1&s=1" alt="Restaurant Image" />
                            <span>Address</span>
                            <span>Phone #</span>
                        </div>
                        <div>
                            <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                                urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                                aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                                maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                                eu facilisis sed</span>
                        </div>
                    </li>
                    <li id="activities-li">
                        <div>
                            <h1 className="checkin-headers" id="activity-header">Restaurant #3</h1>
                            <img height="auto" width="500rem" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a2/4b/11/fun-place.jpg?w=1200&h=-1&s=1" alt="Restaurant Image" />
                            <span>Address</span>
                            <span>Phone #</span>
                        </div>
                        <div>
                            <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                                urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                                aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                                maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                                eu facilisis sed</span>
                        </div>
                    </li>
                    <li id="activities-li">
                        <div>
                            <h1 className="checkin-headers" id="activity-header">Restaurant #4</h1>
                            <img height="auto" width="500rem" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a2/4b/11/fun-place.jpg?w=1200&h=-1&s=1" alt="Restaurant Image" />
                            <span>Address</span>
                            <span>Phone #</span>
                        </div>
                        <div>
                            <span>pellentesque habitant morbi tristique senectus et netus et malesuada
                                fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
                                urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
                                aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
                                maecenas pharetra convallis posuere morbi leo urna molestie at elementum
                                eu facilisis sed</span>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default RestaurantsSR
