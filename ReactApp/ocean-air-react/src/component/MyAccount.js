import React from "react";
import Navbar from "../component/Navbar/Navbar";
import "../CSS/Account.css"
import "../images/santarosa/beach-1.jpeg"
import Contact from "./Contact";

function MyAccount() {

    return (
        <div className="container-fluid" id="account-page">
            <Navbar />
            <div id="account-page">
                <div id="account-container">
                    <div id="side-container">
                        <h1>Welcome back, Jack!</h1>
                    </div>
                    <div id="main-container">
                        <h2>My Coupons</h2>
                        <div id="coupon-section">
                            <div class="card text-center" id="coupon-container">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-body" id="coupon-text-1">
                                    <h5 class="card-title">Special Santa Rosa Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a href="#" class="btn btn-primary">Apply Coupon!</a>
                                </div>
                                <div class="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>
                            <div class="card text-center" id="coupon-container">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-body" id="coupon-text-2">
                                    <h5 class="card-title">Special Pompano Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a href="#" class="btn btn-primary">Apply Coupon!</a>
                                </div>
                                <div class="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>
                            <div class="card text-center" id="coupon-container">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-body" id="coupon-text-3">
                                    <h5 class="card-title">Special Myrtle Beach Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a href="#" class="btn btn-primary">Apply Coupon!</a>
                                </div>
                                <div class="card-footer text-muted">
                                    2 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default MyAccount