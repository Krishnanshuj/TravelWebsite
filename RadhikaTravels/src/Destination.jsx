import React from "react";
import './RadhikaTravels.css';
import ayodhya from "./assets/ayodhya.png";
import shimla from "./assets/shimla.png";
import varanasi from "./assets/varanasi.png";
import nainital from "./assets/nainital.png";
import agra from "./assets/agra.png";
import jaipur from "./assets/jaipur.png";

function Destination() {
  const places = [
    { img: ayodhya, title: 'Shrine Ayodhya Ji' },
    { img: shimla, title: 'Leisure Shimla' },
    { img: varanasi, title: 'Shrine Varanasi' },
    { img: nainital, title: 'Leisure Nainital' },
    { img: agra, title: 'Culture Agra' },
    { img: jaipur, title: 'Culture Jaipur' },
  ];

  return (
    <div>
      <section className="destination" id="destination">
        <h4>OUTSTATION DESTINATIONS</h4>
        <h2>Choose Your Place</h2>
        <div className="underlined"></div>
      

      <section className="places-grid">
        {places.map((place, index) => (
          <div className="place-card" key={index}>
            <img src={place.img} alt={place.title} />
            <h3>{place.title}</h3>
          </div>
        ))}
      </section>
      </section>
    </div>
  );
}

export default Destination;
