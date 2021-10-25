import React,{useState} from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer"
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
        <div className="modal-content" id="coupon-modal">
            <div className="modal-header" id="coupon-header">
                <button onClick={handleCloseDisplay} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="coupon-body">
                <h5>Coupon Code:</h5>
                <div className="input-group" id="coupon-div">
                    <p type="password" className="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon" >OCEANAIR5</p>
                    <button onClick={handleCopyCode} value="OCEANAIR5" className="input-group-text" id="btnGroupAddon">Copy!</button>
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
                            <div className="card text-center" id="coupon-container">
                                <div className="card-body" id="coupon-text-1">
                                    <h5 className="card-title">Special Santa Rosa Beach Offer</h5>
                                    <p className="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" className="btn btn-primary" >See Coupon!</a>
                                </div>
                            </div>
                            <div className="card text-center" id="coupon-container">
                                <div className="card-body" id="coupon-text-2">
                                    <h5 className="card-title">Special Pompano Beach Offer</h5>
                                    <p className="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" className="btn btn-primary">See Coupon!</a>
                                </div>
                            </div>
                            <div className="card text-center" id="coupon-container">
                                <div className="card-body" id="coupon-text-3">
                                    <h5 className="card-title">Special Myrtle Beach Offer</h5>
                                    <p className="card-text">5% off your next booking</p>
                                    <a onClick={handleSeeCouponCode} href="#" className="btn btn-primary">See Coupon!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
                <Footer/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName
    }
}

export default connect(mapStateToProps)(MyAccount)