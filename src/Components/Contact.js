import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="service-container contact-container" id="contact">
      <h1>CONTACT US</h1>
      <div className="detail row">
        <a className="col-md-4 our-color" href="mailto:info@mysite.com">
          info@mysite.com
        </a>
        <p className="col-md-4 our-color">
          500 Terry Francois Street, San Francisco, CA 94158
        </p>
        <p className="col-md-4 our-color">Tel: 123-456-7890 </p>
      </div>
      <form className="form row">
        <input
          className="col-xl inp"
          type="text"
          name="name"
          placeholder="Name*"
        />
        <input
          className="col-xl inp"
          type="email"
          name="email"
          placeholder="Email*"
        />
        <input
          className="col-md-12 inp"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea className="inp" placeholder="Message" name="message" />
        <button className="my-btn-search">Send</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
