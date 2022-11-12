import React from "react";
import EightComponent from "../EightComponent";
import FifthComponent from "../FifthComponent";
import FirstComponent from "../FirstComponent";
import FouthComponent from "../FouthComponent";
import SecondComponent from "../SecondComponent";
import SixComponent from "../SixComponent";
import ThirdComponent from "../ThirdComponent";
import NinethComponent from "../NinethComponent";
import TenthComponent from "../TenthComponent";
import PersistentDrawerRight from "../Toggle";

const Homepage = () => {
  return (
    <div>
      <PersistentDrawerRight />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FouthComponent />
      <FifthComponent />
      <SixComponent />
      <EightComponent />
      <NinethComponent />
      {/* <TenthComponent /> */}
    </div>
  );
};

export default Homepage;
