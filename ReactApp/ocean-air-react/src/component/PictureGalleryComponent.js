import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image1 from "../images/santarosa/beach-1.jpeg"


export default function PictureGalleryComponent() {
         
    return (
        <div>
            <Gallery>
          <Item
            original="https://placekitten.com/1024/768?image=1"
            thumbnail="https://placekitten.com/80/60?image=1"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={Image1} />
            )}
          </Item>
          <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/80/60?image=2"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={Image1} />
            )}
          </Item>
        </Gallery> 
        </div>
    )
}
