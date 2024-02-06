import React from "react";
import "./Body.css";
const Body = () => {
  return (
    <div className="pizza-pic">
      <div className="left-column">
        <div className="body-text-container">
          <h1 id='main-title'>Perfect Neapolitan pizzas start with a perfect dough.</h1>
          <div className="buttons">
            <div className="booking-buttons">
              <p>Book a Table</p>
            </div>
            <div className="booking-buttons">
              <p>Order online</p>
            </div>
            <div className="booking-buttons">
              <p>Click to call</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-column"></div>
    </div>
  );
};
export default Body;
