import React from "react";

const Collapse = ({ isExpanded, setIsExpanded }) => {
  return (
    <>
      <div
        style={
          isExpanded
            ? {
                background: "#242323",
                position: "fixed",
                textAlign: "left",
                right: 0,
                bottom: 0,
                top: 0,
                transition: "1s",
                paddingLeft: "40px",
              }
            : { position: "fixed", left: -1000, transition: "1s" }
        }
      >
        {isExpanded && (
          <button
            className="cross-btn"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            &#10006;
          </button>
        )}
        <div className="row">
          <a
            className="links col-md-12"
            href="#"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            HOME
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#rooms"
          >
            ROOMS
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#service"
          >
            SERVICES
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#gallery"
          >
            GALLERY
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#"
          >
            SEE & DO
          </a>
          <a
            className="links col-md-12"
            onClick={() => {
              setIsExpanded(false);
            }}
            href="#contact"
          >
            CONTACTS
          </a>
        </div>
      </div>
    </>
  );
};

export default Collapse;
