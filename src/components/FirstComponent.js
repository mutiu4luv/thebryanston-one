// // import { Image } from "@chakra-ui/react";
// import React from "react";
// import { Image } from "react-bootstrap";
// import home from "../Images/home.jpg";
// import "./FirstComponent.css";

// const FirstComponent = () => {
//   return (
//     <div className="firstly">
//       <div>
//         <Image className="img-first" src={home} alt="cgh" />
//       </div>
//       <div className="write-one">Limitless living in a 21st century ICON</div>
//     </div>
//   );
// };

// export default FirstComponent;

import React from "react";
import "./FirstComponent.css";
import home from "../Images/home.jpg";
import { Container } from "react-bootstrap";
const FirstComponent = () => {
  return (
    <div className="gallery-div">
      <div className="div-displ">
        <div className="div-im">
          <img src={home} alt="kjd" className="img-gel" />
        </div>
        <div className="limit-div">
          <h2> Limitless living in a 21st century ICON</h2>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
