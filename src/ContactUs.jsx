import React from "react";
import "./RadhikaTravels.css";
import locationIcon from "./assets/locationIcon.png";
import phoneIcon from "./assets/phoneIcon.png";
import emailIcon from "./assets/emailIcon.png";

function ContactUs() {
  return (
    <div className="contact-container" id="contact">
      <section className="contact-header">
        <h4>Get In Touch</h4>
        <h2>Contact Us</h2>
        <div className="underlinex"></div>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <img src={locationIcon} alt="Location" />
          <h3>Office Address</h3>
          <p>
            2/300 Vastu Khand, Gomti Nagar, <br />
            Chinhat Lucknow, Uttar Pradesh 226005
          </p>
        </div>

        <div className="contact-card">
          <img src={phoneIcon} alt="Phone" />
          <h3>Call Us</h3>
          <p>+91 9451038570</p>
        </div>

        <div className="contact-card">
          <img src={emailIcon} alt="Email" />
          <h3>Email Us</h3>
          <p>vijaysinghh198@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
