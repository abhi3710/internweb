import React from "react";

const OurService = ({ title = "OUR SERVICES", content, isSvg = true }) => {
  return (
    <div className="service-container" id="service">
      <h1 className="our-title-color">{title}</h1>
      <div className="row">
        {content &&
          content.map((x) => (
            <div className="col-md-4">
              {isSvg && x.svg}
              <h6 className="offset">{x.heading}</h6>
              <p className="our-color offset">{x.para}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurService;
