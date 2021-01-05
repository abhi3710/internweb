import React from "react";
import { Parallax } from "react-parallax";
import img2 from "../Graphics/2.jpg";

const OurRoom = () => {
  return (
    <>
      <div className="our-container" id="about">
        <h1 className="our-title-color">ABOUT</h1>
        <p className="our-color">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
      <div id="rooms">
        <Parallax
          className="my-img"
          bgImage={img2}
          bgImageAlt="alt"
          strength={600}
        >
          <div className="our-container our-rooms" id="rooms">
            <h1 className="our-title-color">OUR ROOMS</h1>
            <p className="our-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default OurRoom;
