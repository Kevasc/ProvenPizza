import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <p className="menu-title">PROVEN menus.</p>
        <div className="menus-container">
          <div className="menu-blurb">
            <p>
              Our pizzas are prepared to order using the freshest of
              ingredients. If you’re new to Neapolitan pizzas then our classics
              will give you the most authentic experience. If you’re looking for
              something different then why not try one of our carefully
              considered specials.
            </p>
          </div>
          <div className="menus">
            <div className="menu-container">
              <div className="menu-main" />
              <div className="menu-button-container"><div className="menu-button">
                <p>Main menu</p>
              </div></div>
            </div>

            <div className="menu-container">
              <div className="menu-dessert"></div>
              <div className="menu-button-container"><div className="menu-button">
                <p>Dessert menu</p>
              </div></div>
            </div>

            <div className="menu-container">
              <div className="menu-kids"></div>
              <div className="menu-button-container"><div className="menu-button">
                <p>Kids menu</p>
              </div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
