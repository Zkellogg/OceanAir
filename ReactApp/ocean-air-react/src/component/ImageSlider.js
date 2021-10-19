import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-kV4PjRm/0/c8535d45/X4/i-kV4PjRm-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-kV4PjRm/0/c8535d45/X4/i-kV4PjRm-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-qVmPTFF/0/8bf26aaa/X4/i-qVmPTFF-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-qVmPTFF/0/8bf26aaa/X4/i-qVmPTFF-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-WgHkn2B/0/44c189b2/X4/i-WgHkn2B-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-WgHkn2B/0/44c189b2/X4/i-WgHkn2B-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-ZN56spr/0/54288c1d/X4/i-ZN56spr-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-ZN56spr/0/54288c1d/X4/i-ZN56spr-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-bvX7xjF/0/b6ec6521/X4/i-bvX7xjF-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-bvX7xjF/0/b6ec6521/X4/i-bvX7xjF-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-Jjr53dt/0/129865be/X4/i-Jjr53dt-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-Jjr53dt/0/129865be/X4/i-Jjr53dt-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-PQdW3Sd/0/7ddd89b5/X4/i-PQdW3Sd-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-PQdW3Sd/0/7ddd89b5/X4/i-PQdW3Sd-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-RJfwzmJ/0/cbecd7d0/X4/i-RJfwzmJ-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-RJfwzmJ/0/cbecd7d0/X4/i-RJfwzmJ-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-75WVdzH/0/d12ada7a/X4/i-75WVdzH-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-75WVdzH/0/d12ada7a/X4/i-75WVdzH-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-R4JTcvm/0/5168788d/X4/i-R4JTcvm-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-R4JTcvm/0/5168788d/X4/i-R4JTcvm-X4.jpg",
  },
  {
    original:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-4Z4mGvM/0/66b3a2cb/X4/i-4Z4mGvM-X4.jpg",
    thumbnail:
      "https://photos.smugmug.com/Ocean-Air-9-4-21-SOOC/n-34S27s/i-4Z4mGvM/0/66b3a2cb/X4/i-4Z4mGvM-X4.jpg",
  },
];

function ImageSlider() {
  return <ImageGallery items={images} originalClass={"imageClass"} />;
}

export default ImageSlider;
