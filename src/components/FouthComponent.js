// import { Image } from "@chakra-ui/react";
// import React from "react";
// import room from "../Images/room.jpg";
// import "./FouthComponent.css";

// const FouthComponent = () => {
//   return (
//     <div className="fouth">
//       <div>
//         <Image className="img-an" src={room} alt="hjv" />
//       </div>
//       <div className="writers">SPACE IS THE ULTIMATE CITY LUXURY</div>
//     </div>
//   );
// };

// export default FouthComponent;

import React from "react";
import "./FouthComponent.css";
import home from "../Images/home.jpg";
import { Container } from "react-bootstrap";
const FouthComponent = () => {
  return (
    <div className="gallery-div">
      <div className="div-displ">
        <div className="div-im">
          <img src={home} alt="kjd" className="img-gel" />
        </div>
        <div className="limit-div">
          <h2> SPACE IS THE ULTIMATE CITY LUXURY</h2>
        </div>
      </div>
    </div>
  );
};

export default FouthComponent;
