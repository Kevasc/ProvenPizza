import React from "react";
import BodyTopSection from "./BodyTopSection";
import BodyMiddleSection from "./BodyMiddleSection";
import BodyLowerSection from "./BodyLowerSection";
import Menu from "./Menu";

const BodyContainer = () => {
  return (
    <div>
      <BodyTopSection />
      <BodyMiddleSection />
      <BodyLowerSection/>
      <Menu/>
    </div>
  );
};
export default BodyContainer;
