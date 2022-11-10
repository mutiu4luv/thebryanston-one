import React from "react";
import { Image } from "react-bootstrap";
import parlor from "../Images/parlor.jpg";
import "./NinethComponent.css";

const NinethComponent = () => {
  return (
    <div className="nine">
      <div className="text-nine">SPACIOUS & REDEFINED BY DESIGN</div>
      <div>
        <Image className="img-nine" src={parlor} alt="jkg" />
      </div>
    </div>
  );
};

export default NinethComponent;
