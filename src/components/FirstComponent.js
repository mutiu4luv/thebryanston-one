import React from "react";
import { Image } from "react-bootstrap";
import first from "../Images/first.jpg";
import "./FirstComponent.css";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import AnimateOnChange from "react-animation";

const FirstComponent = () => {
  return (
    <div className="first">
      {/* <Fade> */}

      <div>
        <Image className="img-in" src={first} alt="gjg" />
      </div>

      {/* </Fade> */}

      <div className="write">
        <div style={{ fontSize: "50px" }}>
          {" "}
          Limitless living in a 21st century ICON{" "}
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
