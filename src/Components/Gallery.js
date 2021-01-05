import React from "react";
import img1 from "../Graphics/3.jpeg";
import img2 from "../Graphics/4.jpg";
import img3 from "../Graphics/5.jpg";

const Gallery = () => {
  return (
    <div className="service-container" id="gallery">
      <h1 className="our-title-color">GALLERY</h1>
      <div className="row">
        <img className="col-md-4 gallery-img" src={img1} alt="img1" />
        <img className="col-md-4 gallery-img" src={img2} alt="img2" />
        <img className="col-md-4 gallery-img" src={img3} alt="img3" />
      </div>
    </div>
  );
};

export default Gallery;
