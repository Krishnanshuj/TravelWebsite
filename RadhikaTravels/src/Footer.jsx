import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './RadhikaTravels.css';
import logo from "./assets/radhikalogo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <img src={logo} alt="Radhika Travels" className="footer-logo" />
          <p>
            We provide a bouquet of services which include: Highly economical air tickets, Tour Packages (Foreign / Domestic / Group / Incentive / LTC), and Worldwide Hotel Bookings.
          </p>
        </div>

        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">› Home</a></li>
            <li><a href="#about">› About Us</a></li>
            <li><a href="#services">› Local Services</a></li>
            <li><a href="#features">› Feature</a></li>
            <li><a href="#destination">› Destination</a></li>
            <li><a href="#fleet">› Our Fleet</a></li>
            <li><a href="#contact">› Contact Us</a></li>
          </ul>
        </div>

        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 2/300 Vastu Khand, Gomti Nagar, Chinhat Lucknow, Uttar Pradesh 226010</p>
          <p><FaPhone /> +91 9451038570</p>
          <p><FaEnvelope /> vijaysinghh198@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Radhika Travels All Rights Reserved | Design & Developed By SigmaIT Softwares Designers Pvt. Ltd.</p>
        <div className="footer-socials">
          <a href="https://www.facebook.com/share/p/16ChZeVE1w/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
                    
                    <a href="https://www.instagram.com/radhikaatravels?igsh=MXI1ZWI1ZnRzdDVxZw==" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
