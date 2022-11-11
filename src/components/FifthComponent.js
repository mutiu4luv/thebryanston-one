// import React from "react";
// import pillow from "../Images/pillow.jpg";
// import "./FifthComponent.css";

// const FifthComponent = () => {
//   return (
//     <div className="five-component ">
//       <div className="text-six">
//         {" "}
//         contemporary detailing with elegant aesthetics
//       </div>
//       <div>
//         {" "}
//         <img src={pillow} alt="jkb" className="img-five" />
//       </div>
//     </div>
//   );
// };

// export default FifthComponent;

import React from "react";
import pillow from "../Images/pillow.jpg";
import "./FifthComponent.css";
import { Container, Image } from "react-bootstrap";
const FifthComponent = () => {
  return (
    <div className="gel-div">
      <div>
        <h3 className="text-center-one">
          contemporary detailing with elegant aesthetics{" "}
        </h3>
        <div className="div-img-div-div">
          <Image src={pillow} alt="jdn" className="imge-gel" />
        </div>
      </div>
    </div>
  );
};

export default FifthComponent;
