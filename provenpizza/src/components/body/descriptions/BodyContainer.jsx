import React from "react";
import BodyMiddleSection from "./BodyMiddleSection";
import BodyLowerSection from "./BodyLowerSection";
import BodyTopSection from "./BodyTopSection";
import Menu from "../menu/Menu";


const BodyContainer = () => {
  return (
    <div>
      <BodyTopSection />
      <BodyMiddleSection />
      <BodyLowerSection />
      <Menu />
    </div>
  );
};
export default BodyContainer;
