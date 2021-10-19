import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/CC929890-CA45-49EE-921C-85AC6BB30F9E.JPG";
import image2 from "../images/C5E0C6A3-7E88-4A2C-973C-33A19B1210D8.JPG";
import image3 from "../images/D0E7BF77-5F30-47AF-93F8-FADF8F02DB12.JPG";

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={100000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
