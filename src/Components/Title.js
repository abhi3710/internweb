import React from "react";
import { Parallax } from "react-parallax";
import img1 from "../Graphics/1.jpg";

const Title = () => {
  return (
    <div className="service-container">
      <div className="my-titles">
        <h1 className="my-title">Ferofly</h1>
        <h4 className="my-title">-Magnify your Journey-</h4>
      </div>
      <Parallax
        className="my-img"
        bgImage={img1}
        bgImageAlt="alt"
        strength={600}
      ></Parallax>
    </div>
  );
};

export default Title;
