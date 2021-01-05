import React from "react";
import { Parallax } from "react-parallax";
import img from "../Graphics/9.jpg";

const GuestReview = () => {
  return (
    <>
      <div id="rooms">
        <Parallax
          className="my-img"
          bgImage={img}
          bgImageAlt="alt"
          strength={600}
        >
          <div className="our-container our-rooms">
            <h1 className="our-title-color">GUEST REVIEW</h1>
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

export default GuestReview;
