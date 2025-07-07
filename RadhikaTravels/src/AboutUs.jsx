import React, { useEffect, useRef } from "react";
import "./RadhikaTravels.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "./assets/aboutImg.png";

const AboutUs = () => {
  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // Function to animate About section
  const triggerAboutAnimation = () => {
    gsap.fromTo(".about-text h3",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(".about-text h2",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(".about-text p",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.4, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(".about-image img",
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1.6, delay: 0.5, ease: "power3.out" }
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger-based animation
      gsap.from(".about-text h3", {
        scrollTrigger: {
          trigger: ".about-text h3",
          start: "top 85%",
        },
        opacity: 0,
        y: -30,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".about-text h2", {
        scrollTrigger: {
          trigger: ".about-text h2",
          start: "top 85%",
        },
        opacity: 0,
        y: -20,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".about-text p", {
        scrollTrigger: {
          trigger: ".about-text p",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 2,
        delay: 1,
        ease: "power3.out",
      });

      gsap.from(".about-image img", {
        scrollTrigger: {
          trigger: ".about-image img",
          start: "top 85%",
        },
        opacity: 0,
        x: -40,
        duration: 1.6,
        delay: 0.5,
        ease: "power3.out",
      });
    }, aboutRef);

    // Handle hash change to manually trigger animation
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        triggerAboutAnimation();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      ctx.revert();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="radhika-container" ref={aboutRef}>
      <div className="navbar-spacing"></div>
      <section className="about-section" id="about">
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>

        <div className="about-text">
          <h3>ABOUT US</h3>
          <h2>RADHIKA <span className="highlight">TRAVELS</span></h2>
          <p>
            We provide a bouquet of services which include: Highly economical air tickets,
            tour packages (Foreign, Domestic, Group, Incentive Packages, LTC packages),
            worldwide hotel bookings, rail tickets, Tatkal bookings, MICE (Meetings – Incentive – Conferences – Exhibitions),
            cab booking, helicopter booking, air ambulance and chopper booking, events planners, airport assistance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
