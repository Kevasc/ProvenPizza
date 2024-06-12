import React from "react";
import "./RestaurantMap.css";

const RestaurantMap = () => {
  return (
    <div id='find-us' className="map-area">
      <div className="column1"></div>

      <div className="column2">
        <div className="map-text-container">
          <p className="map-headings">Finding us.</p>
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
          <div className="map-button-container">
            <div className="map-button">
              <p>Google maps</p>
            </div>
          </div>
          <p className="map-headings">
            <span className="white-pr">Pr</span>oven time.
          </p>
          <div className="map-text">
            <span className="bold-days1">Sunday to Thursday</span>
            <br />
            <p>12 noon – 10pm</p>
            <br />
            <span className="bold-days2"> Friday and Saturday</span>
            <br />
            <p>12 noon – 11pm</p>
          </div>
          <div className="map-button-container">
            <div className="map-button">
              <p>Join our team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="column3">
        <div className="map-text-container">
          <p className="map-headings">Subscribe</p>
          <p className="map-text">
            Sign up to the PROVEN Pizzeria newsletter to receive information and
            offers on upcoming events.
          </p>

          <div className="bold-subscribe-text">
            <form
              method="post"
              action="https://jajitsu.tumblr.com/post/104942601963"
            >
              Email Address*
              <input className="input-button" type="text" name="email" />
              <br />
              NAME
              <input className="input-button" type="text" name="name" />
              <br />
              *= required field
              <input
                className="subscribe-button"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMap;
