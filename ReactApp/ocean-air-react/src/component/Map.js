import React from 'react'
import "../CSS/App.css"

function Map() {
    return (
        <iframe id="map-iframe" width="500" height="500" loading="lazy" allowfullscreen
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAsSuhDzEqib-0sYnkaJBtS_wDHqlanXLQ&q=13+Eastern+Lake+Ct,Santa Rosa+Florida"}>
        </iframe>
        )
}

export default Map
