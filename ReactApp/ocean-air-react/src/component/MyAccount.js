import React,{useState} from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar/Navbar";
import "../CSS/Account.css"
import "../images/santarosa/beach-1.jpeg"
import Contact from "./Contact";

function MyAccount(props) {
    const [displayCoupon, setDisplayCoupon] = useState(false)

    const handleCloseDisplay=()=>{
        setDisplayCoupon(false)
    }

    const handleSeeCouponCode = () => {
        if (displayCoupon) {
            setDisplayCoupon(false)
        } else {
            setDisplayCoupon(true)
        }
    }

    const handleCopyCode=(e)=>{
        console.log(e.target.value)
        const token=localStorage.getItem('jsonwebtoken')
        if(token){
            navigator.clipboard.writeText(e.target.value)
        }
    }

    const couponModal = (
        <div class="modal-content" id="coupon-modal">
            <div class="modal-header" id="coupon-header">
                <button onClick={handleCloseDisplay} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="coupon-body">
                <h5>Coupon Code:</h5>
                <div class="input-group" id="coupon-div">
                    <p type="password" class="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon" >OCEANAIR5</p>
                    <button onClick={handleCopyCode} value="OCEANAIR5" class="input-group-text" id="btnGroupAddon">Copy!</button>
                </div>
            </div>
        </div>
    )


    return (
        <div className="container-fluid" id="account-page">
            <Navbar />
            {displayCoupon ? couponModal : null}
            <div id="account-page">
                <div id="account-container">
                    <div id="side-container">
                        <h1 id="side-heading">Welcome, {props.firstName}</h1>
                    </div>
                    <div id="main-container">
                        <h2>My Coupons</h2>
                        <div id="coupon-section">
                            <div class="card text-center" id="coupon-container">
                                <div class="card-body" id="coupon-text-1">
                                    <h5 class="card-title">Special Santa Rosa Beach Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" class="btn btn-primary" >See Coupon!</a>
                                </div>
                            </div>
                            <div class="card text-center" id="coupon-container">
                                <div class="card-body" id="coupon-text-2">
                                    <h5 class="card-title">Special Pompano Beach Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" class="btn btn-primary">See Coupon!</a>
                                </div>
                            </div>
                            <div class="card text-center" id="coupon-container">
                                <div class="card-body" id="coupon-text-3">
                                    <h5 class="card-title">Special Myrtle Beach Offer</h5>
                                    <p class="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" class="btn btn-primary">See Coupon!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName
    }
}

export default connect(mapStateToProps)(MyAccount)