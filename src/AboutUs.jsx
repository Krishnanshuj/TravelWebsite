import react from "react";
import "./RadhikaTravels.css";
import aboutImg from "./assets/aboutImg.png"

const AboutUs = () =>{
    return(
       <div className="radhika-container">
        <div className="navbar-spacing"></div>
       <section className="about-section" id="about">
       <div className="about-image">
        <img src={aboutImg} alt="About Us" />
       
    </div>
    
    <div className="about-text">
      <h3>ABOUT US</h3>
      <h2>RADHIKA <span className="highlight">TRAVELS</span></h2>
      <p>
        We provide a bouquet of services which include: Highly economical air tickets, tour packages (Foreign, Domestic, Group, Incentive Packages, LTC packages), worldwide hotel bookings, rail tickets, Tatkal bookings, MICE (Meetings – Incentive – Conferences – Exhibitions), cab booking, helicopter booking, air ambulance and chopper booking, events planners, airport assistance.
      </p>
    </div>
  </section>

</div>
);
};

export default AboutUs;
