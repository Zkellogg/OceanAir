import React from "react";
import "../CSS/Property.css"

function Seagrove(){
    return(
        <div class="row">
        <div class="column">
          <img src="../src/images/SantaRosa/day-1.jpeg" onclick="openModal();currentSlide(1)" class="hover-shadow" alt=""/>
        </div>
        <div class="column">
          <img src="ReactApp/ocean-air-react/src/images/SantaRosa/beach-2.jpeg" onclick="openModal();currentSlide(2)" class="hover-shadow" alt=""/>
        </div>
        <div class="column">
          <img src="ReactApp/ocean-air-react/src/images/SantaRosa/livingroom-3.jpeg" onclick="openModal();currentSlide(3)" class="hover-shadow" alt=""/>
        </div>
        <div class="column">
          <img src="ReactApp/ocean-air-react/src/images/SantaRosa/kitchen-1.jpeg" onclick="openModal();currentSlide(4)" class="hover-shadow" alt=""/>
        </div>
      </div>
      
    )
}

export default Seagrove