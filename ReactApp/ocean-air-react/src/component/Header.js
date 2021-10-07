import React from "react";
import "../CSS/Header.css";
import logo from "../images/OceanAirLogoB_Locations_600x200.png";

const Header = () => {
  return (
    <div className="header">
      <img className="oceanAirLogo" src={logo} />
    </div>
  );
};

export default Header;
