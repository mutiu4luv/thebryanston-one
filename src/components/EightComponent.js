import React from "react";
import { Image } from "react-bootstrap";
import table from "../Images/table.jpg";
import "./EightComponent.css";

const EightComponent = () => {
  return (
    <div className="eight">
      <div>
        <Image className="img" src={table} alt="ngmn" />
      </div>
      <div className="text-two"> the world at your window</div>
    </div>
  );
};

export default EightComponent;
