import React from "react";
import "./RestaurantMap.css";

const RestaurantMap = () => {
  return (
    <div className="map-area">
      <div className="column1"></div>

      <div className="column2">
        <div className="map-text-container"><p className="map-headings">Finding us.</p>
        <p className="map-text">
          PROVEN Pizzeria
          <br />
          56 Newcastle Road,
          <br />
          Stone, Staffordshire.
          <br />
          ST15 8LB
          <br />
          T: 01785 817 007
          <br />
        </p>
        <div className="menu-button-container"><div className="map-button">
                <p>Google maps</p>
              </div></div>
        <p className="map-headings">
          <span className="white-pr">Pr</span>oven time.
        </p>
        <p className="map-text">
          Sunday to Thursday
          <br />
          12 noon– 10pm
          <br />
          Friday and Saturday
          <br />
          12noon – 11pm
        </p>
        <div className="menu-button-container"><div className="map-button">
                <p>Join our team</p>
              </div></div></div>
        
      </div>

      <div className="column3">
       <div className="map-text-container"><p className="map-headings">Subscribe</p>
        <p className="map-text">
          Sign up to the PROVEN Pizzeria newsletter to receive information and
          offers on upcoming events.
        </p></div> 
      </div>
    </div>
  );
};

export default RestaurantMap;
