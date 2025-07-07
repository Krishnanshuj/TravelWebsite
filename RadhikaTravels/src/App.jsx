import { useState } from 'react'
import FirstPage from "./FirstPage";
import AboutUs from "./AboutUs";
import LocalServices from "./LocalServices"
import Feature from "./Feature";
import Destination from "./Destination"
import VehicleFleet from "./VehicleFleet"
import ContactUs from "./ContactUs"
import Touch from "./Touch"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <FirstPage />
      <AboutUs />
      <LocalServices />
      <Feature />
      <Destination />
      <VehicleFleet />
      <ContactUs />
      <Touch />
      <Footer />
    </div>
  );
}


export default App
