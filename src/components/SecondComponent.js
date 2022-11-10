import { Image } from "@chakra-ui/react";
import React from "react";
// import signsture from "../Images/signsture.jpg";
import house from "../Images/house.jpg";
import signsture from "../Images/signsture.jpg";
import "./SecondComponent.css";

const SecondComponent = () => {
  return (
    <div className="second">
      <div>THE MOST IMPORTANT CORNER OF HYDE PARK</div>
      <div className="second-two">
        <div>
          <Image className="img" src={signsture} alt="gjg" />
        </div>
        <div>
          {" "}
          <Image className="img-on" src={house} alt="gjg" />
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
