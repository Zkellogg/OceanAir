import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image1 from "../images/santarosa/day-1.jpeg"
import Image2 from "../images/santarosa/roof.jpeg"
import Image3 from "../images/santarosa/beach-2.jpeg"
import Image4 from "../images/santarosa/chairs-1.jpeg"
import Image5 from "../images/santarosa/livingroom-3.jpeg"
import Image6 from "../images/santarosa/livingroom-4.jpeg"
import Image7 from "../images/santarosa/kitchen-1.jpeg"
import Image8 from "../images/santarosa/dining-1.jpeg"
import Image9 from "../images/santarosa/livingroom-1.jpeg"
import Image10 from "../images/santarosa/bathroom-1.jpeg"
import Image11 from "../images/santarosa/bed-1.jpeg"
import Image12 from "../images/santarosa/night-1.jpeg"
import Image13 from "../images/santarosa/beach-1.jpeg"



export default function PictureGalleryComponent() {
         
    return (
        <div>
            <Gallery>
          <Item
            original={Image1}
            thumbnail={Image1}
            width="1024"
            height="1400"
          >
            
            {({ ref, open }) => (
              <img ref={ref}  class="reviewImages" onClick={open} src={Image1} alt={""} />
            )}
          </Item>
          <Item
      original={Image2}
      thumbnail={Image2}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image3}
      thumbnail={Image3}
      width="1400"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image4}
      thumbnail={Image4}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image5}
      thumbnail={Image5}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    
    <Item
      original={Image6}
      thumbnail={Image6}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image7}
      thumbnail={Image7}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image8}
      thumbnail={Image8}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image9}
      thumbnail={Image9}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image10}
      thumbnail={Image10}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image11}
      thumbnail={Image11}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image12}
      thumbnail={Image12}
      width="1024"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
    <Item
      original={Image13}
      thumbnail={Image13}
      width="3000"
      height="1000"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt={""}/>
      )}
    </Item>
        </Gallery> 
        </div>
    )
}
