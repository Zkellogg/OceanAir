import React from 'react'
import { useHistory } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import logo from "../images/OceanAirLogoB_Locations_600x200.png"
import "../CSS/Activities.css"

function Activities() {
    const history = useHistory()
    const handleRoutePrevious = () => {
        history.goBack()
    }
    return (
        <div className="container-fluid" id="activity-page">
            <div id="activity-header">
                <div className="container-fluid" id="activity-img" width="150rem" height="500rem">
                    <Navbar id="activity-nav" href="/">
                        <a href="/"><img src={logo} width="290rem" height="130rem" className="d-inline-block align-top" id="activity-logo" alt="" /></a>
                        <button onClick={handleRoutePrevious} type="button" class="btn btn-outline-secondary" id="back-btn">Back to Previous</button>
                    </Navbar>
                    <a className="arrow-div">
                        <a onClick={handleRoutePrevious} type="button" class="btn btn-outline-secondary" id="back-btn-mobile">Back</a>
                        <div class="arrow arrow-first"></div>
                        <div class="arrow arrow-second"></div>
                    </a>
                </div>
            </div>
            <div className="container-fluid" id="activity-content">
                <div className="container-fluid" id="act-columns">
                    <ul>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="Beaches" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid" id="act-columns">
                    <ul>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="..." alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="..." alt="Third slide"/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Activities
