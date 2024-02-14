import React from "react";
import logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="heading">

        <img className="logo-img" src={logo} alt="logo" />
 
      <div className="header-button-container">
        <div className="header-button">
          <p>OUR NEAPOLITAN DOUGH</p>
        </div>
        <div className="header-button">
          <p>WOOD FIRED PIZZA MENU</p>
        </div>
        <div className="header-button">
          <p>FIND US</p>
        </div>
        <div className="header-button">
          <p>ORDER ONLINE</p>
        </div>
        <div className="header-button">
          <p>BOOK A TABLE</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
