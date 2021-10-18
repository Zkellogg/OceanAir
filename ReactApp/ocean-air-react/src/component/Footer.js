import React from "react";
import logo from "../images/OceanAirLogoB_Locations_600x200.png";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer page-footer font-small blue">
        <img
          src={logo}
          width="350rem"
          height="150rem"
          className="d-inline-block align-top"
          alt=""
        />
        <div class="footer-copyright text-center py-2">
          © 2020 Copyright:
          <a href="https://visitoceanair.com/"> Ocean Air Rentals</a> ---
          info@visitoceanair.com / (770) 548-9020
        </div>
      </footer>
      <div></div>
    </div>
  );
}

export default Footer;
