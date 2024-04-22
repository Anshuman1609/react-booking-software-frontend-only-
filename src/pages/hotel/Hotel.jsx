import React from 'react';
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotalTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St125 New York</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotel