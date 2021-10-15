import React from "react";
import "../CSS/Property.css";

function SeaProperty() {
    return (
      <form className = "PropertyForm">
      <div id="Property1" className="Property1">
        <h1>
          <strong>Property 1</strong>
        </h1>
        <a type="button" value="Open Window" href= { window.open('https://oceanair.guestybookings.com/listings?city=Santa%20Rosa%20Beach') }><button id="bouncy" className="bouncy" >Book Now!</button></a>
        <h3> property 1 Description </h3>
        <h5>
          pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
          urna molestie at elementum eu facilisis sed odio morbi quis commodo odio
          aenean sed adipiscing diam et netus et malesuada fames ac turpis egestas
          maecenas pharetra convallis posuere morbi leo urna molestie at elementum
          eu facilisis sed
        </h5>
       <h3>Price Details</h3>
       <ul className = 'priceDes'>
           <li>item1</li>
           <li>item2</li>
           <li>item3</li>
       </ul>
        <h2>Property 1 features</h2>
        <ul className = 'priceDes'>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
        </ul>
        
      </div>
      </form>
    );
  }
  
  export default SeaProperty;