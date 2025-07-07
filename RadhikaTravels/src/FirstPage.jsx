import React, { useState, useEffect, useRef } from "react";
import "./RadhikaTravels.css";
import {
  FaEnvelope, FaPhone, FaFacebook, FaTwitter,
  FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes
} from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import logo from "./assets/radhikalogo.jpeg";
import carFamily from "./assets/carfamilylogo.png";

const FirstPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const triggerHeroAnimation = () => {
    gsap.fromTo(".hero-text h2",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    gsap.fromTo(".hero-text h1",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(".hero-text p",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(".hero-image img",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 3.2, delay: 1, ease: "power3.out" }
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger version
      gsap.from(".hero-text h2", {
        scrollTrigger: {
          trigger: ".hero-text h2",
          start: "top 80%",
        },
        opacity: 0,
        y: -30,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".hero-text h1", {
        scrollTrigger: {
          trigger: ".hero-text h1",
          start: "top 80%",
        },
        opacity: 0,
        y: -20,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-text p", {
        scrollTrigger: {
          trigger: ".hero-text p",
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 2,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-image img", {
        scrollTrigger: {
          trigger: ".hero-image img",
          start: "top 80%",
        },
        opacity: 0,
        x: 50,
        duration: 3.2,
        delay: 1,
        ease: "power3.out",
      });
    }, heroRef);

    // Detect hash change for manual Home navigation
    const handleHashChange = () => {
      if (window.location.hash === "" || window.location.hash === "#home") {
        triggerHeroAnimation();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      ctx.revert();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="radhika-container" id="home">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Radhika Travels Logo" />
          <h1>RADHIKA TRAVELS <span className="tagline">The one you can trust</span></h1>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Use #home so hashchange can trigger */}
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Local Services</a>
          <a href="#feature">Feature</a>
          <a href="#destination">Destination</a>
          <a href="#fleet">Our Fleet</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <div className="navbar-spacing"></div>

      <section className="hero" ref={heroRef}>
        <div className="hero-text">
          <h2>WELCOME TO !</h2>
          <h1>
            Radhika <span className="highlight">TRAVELS</span>
          </h1>
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
