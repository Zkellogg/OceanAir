import React from "react";
import "../CSS/Aboutus.css";
import image1 from "../images/4DBA67D7-1A1E-4BC9-BD1F-8815CEB68340.JPG";
import image2 from "../images/C5E0C6A3-7E88-4A2C-973C-33A19B1210D8.JPG";
import image3 from "../images/4DBA67D7-1A1E-4BC9-BD1F-8815CEB68340.JPG";

function Aboutus() {
  return (
    <div id="aboutUs" className="aboutUs">
      <h1>
        <strong>About Us</strong>
      </h1>
      <h3> -Our Story- </h3>
      <h5>
        pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
        urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
        aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
        maecenas pharetra convallis posuere morbi leo urna molestie at elementum
        eu facilisis sed
      </h5>
      <div className="about-us-pics">
        <img className="image1" src={image1} />
        <img className="image2" src={image2} />
      </div>
      <img className="image3" src={image3} />
    </div>
  );
}

export default Aboutus;
