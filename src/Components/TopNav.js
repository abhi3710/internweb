import React, { useEffect, useState } from "react";
import { content } from "../Content/OurServiceContent";
import Collapse from "./Collapse";
import Social from "./Social";

const TopNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1100) setIsMobile(true);
    window.addEventListener("resize", () => {
      window.innerWidth < 1100 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  return (
    <nav className="topNav">
      {!isMobile ? (
        <>
          <a className="links" href="#">
            HOME
          </a>
          <a className="links" href="#about">
            ABOUT
          </a>
          <a className="links" href="#rooms">
            ROOMS
          </a>
          <a className="links" href="#service">
            SERVICES
          </a>
          <a className="links" href="#gallery">
            GALLERY
          </a>
          <a className="links" href="#">
            SEE & DO
          </a>
          <a className="links" href="#contact">
            CONTACTS
          </a>
        </>
      ) : (
        <>
          <button className="my-btn drop" onClick={() => setIsExpanded(true)}>
            &#9776;
          </button>
        </>
      )}
      <button className="my-btn">Book A Room</button>
      {!isMobile && <Social />}
      {isMobile && (
        <Collapse isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      )}
    </nav>
  );
};

export default TopNav;
