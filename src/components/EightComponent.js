// import React from "react";
// import { Image } from "react-bootstrap";
// import table from "../Images/table.jpg";
// import "./EightComponent.css";

// const EightComponent = () => {
//   return (
//     <div className="eight">
//       <div>
//         <Image className="img" src={table} alt="ngmn" />
//       </div>
//       <div className="text-two"> the world at your window</div>
//     </div>
//   );
// };

// export default EightComponent;

import React from "react";
import "./EightComponent.css";
import table from "../Images/table.jpg";
import { Container } from "react-bootstrap";
const EightComponent = () => {
  return (
    <div className="eight-div">
      <div className="div-display">
        <div className="div-img-span">
          <img src={table} alt="kjd" className="img-gell" />
        </div>
        <div className="limit-div-write">
          <h2> SPACE IS THE ULTIMATE CITY LUXURY</h2>
        </div>
      </div>
    </div>
  );
};

export default EightComponent;
