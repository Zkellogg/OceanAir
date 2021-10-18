import React from "react";
import "../CSS/PropertyCards.css";
import srPic from "../images/48B7B236-7321-4D26-9057-909BCA5BCC17.JPG";
import pbPic from "../images/pompano/pomp2.jpg";
import mbPic from "../images/myrtle/myrt1.jpg";

function HomeProperties() {
  return (
    <div className="card-div">
      <div className="card-container">
        <div className="image-container">
          <img src={srPic} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Chivas on 30A</h3>
          </div>
          {/* <div className="card-body">
            <p>Tetx123</p>
          </div> */}
        </div>
        <div className="btn">
          <button>
            <a href="/30A-Seagrove-Beach">More info</a>
          </button>
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src={pbPic} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Pompano Beach</h3>
          </div>
          {/* <div className="card-body">
            <p>Tetx123</p>
          </div> */}
        </div>
        <div className="btn">
          <button>
            <a>More Info</a>
          </button>
        </div>
      </div>
      <div className="card-container">
        <div className="image-container">
          <img src={mbPic} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Myrtle Beach</h3>
          </div>
          {/* <div className="card-body">
            <p>Tetx123</p>
          </div> */}
        </div>
        <div className="btn">
          <button>
            <a>More Info</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProperties;
