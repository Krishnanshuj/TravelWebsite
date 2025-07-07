import React from "react";
import "./RadhikaTravels.css";
import sedan from "./assets/sedan.png";
import ertiga from "./assets/ertiga.png";
import innova from "./assets/innova.png";
import crysta from "./assets/crysta.png";
import traveller from "./assets/traveller.png";
import honda from "./assets/honda.png";

function VehicleFleet() {
  const vehicles = [
    {
      img: sedan,
      title: "SEDAN",
      fullDay: "8Hour-80KM: INR 1800/-",
      journey: "12Hour-120KM: INR 2200/-",
      outstation: "Starting @ INR 11/KM*",
      dailyKm: "250KM/Day",
    },
    {
      img: ertiga,
      title: "MPV:ERTIGA-7-SEATER",
      fullDay: "8Hour-80KM: INR 2200/-",
      journey: "12Hour-120KM: INR 2800/-",
      outstation: "Starting @ INR 13/KM*",
      dailyKm: "250KM/Day",
    },
    {
      img: innova,
      title: "MPV:INNOVA-7-SEATER",
      fullDay: "8Hour-80KM: INR 2600/-",
      journey: "12Hour-120KM: INR 3000/-",
      outstation: "Starting @ INR 15/KM*",
      dailyKm: "250KM/Day",
    },
    {
      img: crysta,
      title: "MPV:INNOVA CRYSTA-7-SEATER",
      fullDay: "8Hour-80KM: INR 3000/-",
      journey: "12Hour-120KM: INR 3400/-",
      outstation: "Starting @ INR 17/KM*",
      dailyKm: "250KM/Day",
    },
    {
      img: traveller,
      title: "TRAVELLERS:13/17/26 SEATER",
      fullDay: "NA.",
      journey: "250KM/Day.",
      outstation: "*Depending upon the capacity.",
      dailyKm: "250KM/Day",
    },
    {
      img: honda,
      title: "SEDAN:HONDA CITY/VERNA",
      fullDay: "NA.",
      journey: "12Hour-120KM: INR 4000/-",
      outstation: "Starting @ INR 17/KM*",
      dailyKm: "250KM/Day",
    },
  ];

  return (
    <div className="fleet-container" id="fleet">
      <section className="fleet-header">
        <h4>Our Fleet</h4>
        <h2>List Of Available Vehicles</h2>
        <div className="underlinez"></div>
      </section>

      <section className="vehicle-grid">
        {vehicles.map((vehicle, index) => (
          <div className="vehicle-card" key={index}>
            <img src={vehicle.img} alt={vehicle.title} />
            <h3>{vehicle.title}</h3>
            <div className="vehicle-details">
              <ul>
                <li><span>✔ Full-Day:</span> {vehicle.fullDay}</li>
                <li><span>✔ Journey:</span> {vehicle.journey}</li>
                <li><span>✔ Outstation:</span> {vehicle.outstation}</li>
                <li><span>✔ Journey:</span> {vehicle.dailyKm}</li>
              </ul>
              <a href="tel:+919451038570" className="call-btn">📞 Call Now</a>

            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default VehicleFleet;
