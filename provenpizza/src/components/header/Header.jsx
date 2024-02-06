import React from "react";
import logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div class="heading">
      <div class='logo'><img src={logo} alt="logo" /></div>
<div class='header-button-container'>
      <div class="header-button">
        <p>OUR NEOPOLITAN DOUGH</p>
      </div>
      <div class="header-button">
        <p>WOOD FIRED PIZZA MENU</p>
      </div>
      <div class="header-button">
        <p>FIND US</p>
      </div>
      <div class="header-button">
        <p>ORDER ONLINE</p>
      </div>
      <div class="header-button">
        <p>BOOK A TABLE</p>
      </div>
      </div>
    </div>
  );
};
export default Header;
