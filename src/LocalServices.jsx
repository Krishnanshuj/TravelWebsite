import React from "react";
import "./RadhikaTravels.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import airportImg from "./assets/airport.png";
import cityImg from "./assets/city.png";
import weddingImg from "./assets/wedding.png";

const LocalServices = () => {
  return (
    <section className="local-services" id="services">
      <h4>LOCAL SERVICES</h4>
      <h2>Most Popular Services</h2>
      <div className="underline"></div>

      <div className="service-cards">
        
        <div className="service-card">
          <img src={airportImg} alt="Airport Transfers" />
          <h3>Airport Transfers</h3>
          <p>Best in class Airport-Taxi Service.</p>
          <div className="service-btns">
            <a href="https://wa.me/919451038570" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <FaWhatsapp /> Whatsapp
            </a>
            <a href="tel:9451038570" className="call-btn">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>

        <div className="service-card">
          <img src={cityImg} alt="City Transport" />
          <h3>City Transport</h3>
          <p>Explore with us: The city of Nawabs & Kebabs</p>
          <div className="service-btns">
            <a href="https://wa.me/919451038570" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <FaWhatsapp /> Whatsapp
            </a>
            <a href="tel:9451038570" className="call-btn">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>

        <div className="service-card">
          <img src={weddingImg} alt="Wedding Cars" />
          <h3>Wedding Cars</h3>
          <p>Audi, Mercedez, BMW, Honda City, Verna.</p>
          <div className="service-btns">
            <a href="https://wa.me/919451038570" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <FaWhatsapp /> Whatsapp
            </a>
            <a href="tel:9451038570" className="call-btn">
              <FaPhone /> Call Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocalServices;
