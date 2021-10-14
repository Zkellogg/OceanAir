import React from "react";
import "../CSS/Property.css";

function Properties() {
    return (
      <div className="Property1">
        <h1>
          <title className="propertyTitle">Property 1</title>
        </h1>
        <h2 className="propertyDescription"> Description </h2>
        <p className="propertyDescriptionInfo">
          pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
          urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
          aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
          maecenas pharetra convallis posuere morbi leo urna molestie at elementum
          eu facilisis sed
        </p>
       <h3 className="propertyPriceInfo">Price Description</h3>
       <ul>
           <li></li>
           <li></li>
           <li></li>
       </ul>
        <h2 className="propertyFeatures">Property 1 features</h2>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
        </ul>
        
      </div>
    );
  }
  
  export default Properties;