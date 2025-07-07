import React, { useState } from "react";
import "./RadhikaTravels.css";
import {
  FaEnvelope, FaPhone, FaFacebook, FaTwitter,
  FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes
} from "react-icons/fa";
import logo from "./assets/radhikalogo.jpeg";
import carFamily from "./assets/carfamilylogo.png";

const FirstPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="radhika-container">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Radhika Travels Logo" />
          <h1>RADHIKA TRAVELS <span className="tagline">The one you can trust</span></h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Local Services</a>
          <a href="#feature">Feature</a>
          <a href="#destination">Destination</a>
          <a href="#fleet">Our Fleet</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <div className="navbar-spacing"></div>

      <section className="hero">
        <div className="hero-text">
          <h2>WELCOME TO !</h2>
          <h1>Radhika <span className="highlight">TRAVELS</span></h1>
          <p>
            The combination of all these parameters is really hard to find in the current market 
            although it is possible with "Radhika Travels"
          </p>
        </div>
        <div className="hero-image">
          <img src={carFamily} alt="Family with Car" />
        </div>
      </section>
    </div>
  );
};

export default FirstPage;
