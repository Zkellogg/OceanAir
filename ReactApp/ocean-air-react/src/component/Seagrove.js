import React from "react";
import "../CSS/Property.css"
import PictureGalleryComponent from "../component/PictureGalleryComponent"
import Button from 'react-bootstrap/Button'
function Seagrove() {
    
    
    
    return (
        
        <div>
            <h2 class="title">Ocean Air on 30A</h2>
            <a href='https://oceanair.guestybookings.com/listings/6001d148766a14002e1e2174'>
            <Button variant="primary" className="bookNowButton">Book Now</Button>
            </a>
            <PictureGalleryComponent />
            <p class="clickForMore">Click image to view more images</p>
            
        </div>
        
    )
}

export default Seagrove