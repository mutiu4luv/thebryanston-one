import React from "react";
import { Image } from "react-bootstrap";
import room from "../Images/room.jpg";
import "./FouthComponent.css";

const FouthComponent = () => {
  return (
    <div className="fouth-component">
      <div>
        <Image className="img-four" src={room} alt />
      </div>
      <div className="text-four"> SPACE IS THE ULTIMATE CITY LUXURY</div>
    </div>
  );
};

export default FouthComponent;
