import React from "react";
import BodyTopSection from "./BodyTopSection";
import BodyMiddleSection from "./BodyMiddleSection";
import BodyLowerSection from "./BodyLowerSection";
import Menu from "./Menu";
import RestaurantMap from "./restaurantmap/RestaurantMap";

const BodyContainer = () => {
  return (
    <div>
      <BodyTopSection />
      <BodyMiddleSection />
      <BodyLowerSection />
      <Menu />
      <RestaurantMap />
    </div>
  );
};
export default BodyContainer;