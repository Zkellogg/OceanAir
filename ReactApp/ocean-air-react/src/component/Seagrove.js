import React from "react";
import "../CSS/Property.css";
import PictureGalleryComponent from "../component/PictureGalleryComponent";
import Button from "react-bootstrap/Button";

function Seagrove() {
  return (
    <div className="propdiv">
      <h2 class="title">Ocean Air on 30A</h2>
      <a href="https://oceanair.guestybookings.com/listings/6001d148766a14002e1e2174">
        <Button variant="primary" className="bookNowButton">
          Book Now
        </Button>
      </a>
      <PictureGalleryComponent />
      <p class="clickForMore">Click image to view more images</p>
      <div className="Property1">
        <h1>
          <title className="propertyTitle">Property 1</title>
        </h1>
        <h2 className="propertyDescription"> Description </h2>
        <p className="propertyDescriptionInfo">
          pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
          urna molestie at elementum eu facilisis sed odio morbi quis commodo
          odio aenean sed adipiscing diam et netus et malesuada fames ac turpis
          egestas maecenas pharetra convallis posuere morbi leo urna molestie at
          elementum eu facilisis sed
        </p>

        <h3 className="propertyPriceInfo">Price</h3>
        <ul className="propertyPrice">
          <li>$100</li>
          <li>$200</li>
          <li>$300</li>
        </ul>
        <h2 className="propertyFeatures">Property 1 features</h2>
        <ul className="propertyFeaturesItems">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
      </div>
    </div>
  );
}

export default Seagrove;
