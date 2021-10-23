import React from 'react'
import "../CSS/FooterNav.css"

function FooterNav() {
    return (
        <nav class="navbar fixed-bottom navbar-light bg-light" id="footerNav">
            <a class="btn btn-primary" type="button" id="footerNav-btn" href="https://oceanair.guestybookings.com/listings?city=Pompano%20Beach">
              Book Now
            </a>
            <a class="btn btn-primary" id="footerNav-btn" type="button" href="/check-in">Check-In</a>
            <a class="btn btn-primary" id="footerNav-btn" type="button" href="/check-out">Check-Out</a>
        </nav>
    )
}

export default FooterNav
