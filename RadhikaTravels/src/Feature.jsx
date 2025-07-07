import React from "react";
import "./RadhikaTravels.css";
import safety from "./assets/safety.png";
import pickup from "./assets/pickup.png";
import affordable from "./assets/affordable.png";
import support from "./assets/support.png";

const Feature = () => {
  return (
    <div className="feature-container" id="feature">
      <h4 className="section-subtitle">FEATURE</h4>
      <h2 className="section-title">Our Awesome Feature</h2>
      <div className="underline"></div>

      <div className="feature-cards">
        <div className="feature-card">
          <img src={safety} alt="Safety Guarantee" />
          <h3>Safety Guarantee</h3>
        </div>
        <div className="feature-card">
          <img src={pickup} alt="Fast Pickup" />
          <h3>Fast Pickup</h3>
        </div>
        <div className="feature-card">
          <img src={affordable} alt="Affordable Rate" />
          <h3>Affordable Rate</h3>
        </div>
        <div className="feature-card">
          <img src={support} alt="24/7 Support" />
          <h3>24/7 Support</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
