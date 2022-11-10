import { Image } from "@chakra-ui/react";
import React from "react";
import heaven from "../Images/heaven.jpg";
import "./ThirdComponent.css";

const ThirdComponent = () => {
  return (
    <div className="third">
      <div third-one>
        {" "}
        Panoramic views of<div> Europe’s greatest city park </div>
      </div>
      <div>
        <Image className="img-three " src={heaven} alt="jug" />
      </div>
    </div>
  );
};

export default ThirdComponent;
