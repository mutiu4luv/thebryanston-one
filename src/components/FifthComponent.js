import { Image } from "@chakra-ui/react";
import React from "react";
import "./FifthComponent.css";
import pillow from "../Images/pillow.jpg";

const FifthComponent = () => {
  return (
    <div className="component-five">
      <div className="text-five">
        contemporary detailing with elegant aesthetics
      </div>
      <div>
        {" "}
        <Image className="img-five" src={pillow} alt="hgf" />
      </div>
    </div>
  );
};

export default FifthComponent;
