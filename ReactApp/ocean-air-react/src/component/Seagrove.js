// import React from "react";
// import "../CSS/Property.css";
// import PictureGalleryComponent from "../component/PictureGalleryComponent";
// import Button from "react-bootstrap/Button";

// function Seagrove() {
//   return (
//     <div className="propdiv">
//       <h2 class="title">Ocean Air on 30A</h2>
//       <a href="https://oceanair.guestybookings.com/listings/6001d148766a14002e1e2174">
//         <Button variant="primary" className="bookNowButton">
//           Book Now
//         </Button>
//       </a>
//       <PictureGalleryComponent />
//       <p class="clickForMore">Click image to view more images</p>
//       <div className="Property1">
//         <h1>
//           <title className="propertyTitle">Property 1</title>
//         </h1>
//         <h2 className="propertyDescription"> Description </h2>
//         <p className="propertyDescriptionInfo">
//           pellentesque habitant morbi tristique senectus et netus et malesuada
//           fames ac turpis egestas maecenas pharetra convallis posuere morbi leo
//           urna molestie at elementum eu facilisis sed odio morbi quis commodo
//           odio aenean sed adipiscing diam et netus et malesuada fames ac turpis
//           egestas maecenas pharetra convallis posuere morbi leo urna molestie at
//           elementum eu facilisis sed
//         </p>

//         <h3 className="propertyPriceInfo">Price</h3>
//         <ul className="propertyPrice">
//           <li>$100</li>
//           <li>$200</li>
//           <li>$300</li>
//         </ul>
//         <h2 className="propertyFeatures">Property 1 features</h2>
//         <ul className="propertyFeaturesItems">
//           <li>item 1</li>
//           <li>item 2</li>
//           <li>item 3</li>
//           <li>item 4</li>
//           <li>item 5</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Seagrove;

import React from "react";
import ImageSlider from "./ImageSlider";
import "../CSS/Pompano.css";
import Map from "./Map";

function Seagrove() {
  return (
    <div>
      <div className="title">
        <h1>Chivas on 30A</h1>
      </div>
      <div>
        <ImageSlider />
      </div>
      <div className="main">
        <div className="description">
          <h1>Property Description</h1>
          <p>
            Ocean Air is a beachfront duplex divided into 4
            units. Each unit has a panoramic view of the beach with a private
            beachfront deck. </p> <p> Each unit has a full kitchen, living room, dining
              room and has two bedrooms and two full bathrooms. All the units are
              connected through an interior foyer, making multiple unit rentals
              perfect for family reunions and weddings.</p> <p> Located directly on the
                beach and south of Hwy 30A, these newly renovated units include
                features like upscale stainless steel appliances and granite
                surfaces, new bathrooms, full smart home integrations including,
                swivel from ceiling jumbo TV mounts, and smart audio devices! Each
                unit features reverse-osmosis water purification systems to refill
                your bottles and save our beach from un-needed plastic. </p><p> The living
                  room is decorated with furniture including a jumbo Lovesac beanbag
                  chair placed in front of the picture windows. The most prominent
                  feature of this location is the private beach. Ocean Air 30A boasts
                  of 70’ of private beach, giving each beach chair set a direct ocean
                  view without outside interference. </p><p>Each unit is guaranteed one set
                    of chairs and an umbrella with the Ocean Air-logo. Additional chair
                    sets are available for an additional fee. Off the main living area
                    of each unit is a private beachfront covered deck. The Trex cocktail
                    tables and chairs are perfect for having lunch overlooking the sand
                    or for evening cocktails. Each deck connects to the private beach
                    walkover. The walkover includes two large reading nooks overlooking
                    the beautiful Gulf of Mexico. Evening sunsets are spectacular from
                    this perch, as are the morning sunrises. Many beautiful beach
                    photographs have been taken from there.</p><p> Weekly rentals include use
                      of our paddle boards and kayaks, and brand new beach bicycles (first
                      come first served). Gas grills are also provided in the front of the
                      house. Our extra-large parking area affords our renters with a
                      minimum of two parking spaces each. </p><p>Dogs and Cats are accepted with
                        an additional $200 cleaning fee and must be disclosed prior to
                        arrival. The $30 damage insurance fee does not cover pet-related
                        damages. Any damages over $500 will be charged to the guest. Air
                        mattress available on request.
          </p>
          <div className="aminities">
            <h2>This property offers</h2>
            <ul>
              <li>100% Private beach</li>
              <li>Private two king bedroom unit</li>
              <li>Full Kitchen with brand-new appliences</li>
              <li>Free prking for up to two vehicles</li>
              <li>Full washer and dryer</li>
              <li>Two full bathrooms</li>
            </ul>
            <Map />
          </div>
        </div>
        <div class="container-sm" id="features-modal">
          <div class="modal-header" id="modal-header-div">
            <h4 class="modal-title" id="modal-heading">Seagrove Beach</h4>
          </div>
          <div class="modal-body" id="modal-footer-div">
            <a class="btn btn-primary" type="button" id="modal-btn" href="https://oceanair.guestybookings.com/listings?city=Santa%20Rosa%20Beach">
              Book Now!
            </a>
          </div>
          <div class="container-sm" id="modal-btn-div-1">
            <a class="btn btn-primary" id="modal-btn" type="button" href="/check-in">Check-In Instructions</a>
            <a class="btn btn-primary" id="modal-btn" type="button" href="/check-out">Check-Out Instructions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seagrove;
