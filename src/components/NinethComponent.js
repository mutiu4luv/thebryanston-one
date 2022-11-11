// import React from "react";
// import { Image } from "react-bootstrap";
// import parlor from "../Images/parlor.jpg";
// import "./NinethComponent.css";

// const NinethComponent = () => {
//   return (
//     <div className="nine">
//       <div className="text-nine">SPACIOUS & REDEFINED BY DESIGN</div>
//       <div>
//         <Image className="img-nine" src={parlor} alt="jkg" />
//       </div>
//     </div>
//   );
// };

// export default NinethComponent;

import React from "react";
import "./NinethComponent.css";
import table from "../Images/table.jpg";
import { Container } from "react-bootstrap";
const NineComponent = () => {
  return (
    <div className="nine-div">
      <div className="div-displayed">
        <div className="limit-write">
          <h2>SPACIOUS & REDEFINED BY DESIGN</h2>
        </div>
        <div className="span-img ">
          <img src={table} alt="kjd" className="img-ge" />
        </div>
      </div>
    </div>
  );
};

export default NineComponent;
