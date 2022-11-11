// import { Image } from "@chakra-ui/react";
// import React from "react";
// import heaven from "../Images/heaven.jpg";
// import "./ThirdComponent.css";

// const ThirdComponent = () => {
//   return (
//     <div className="third">
//       <div third-one>
//         {" "}
//         Panoramic views of<div> Europe’s greatest city park </div>
//       </div>
//       <div>
//         <Image className="img-three " src={heaven} alt="jug" />
//       </div>
//     </div>
//   );
// };

// export default ThirdComponent;

import React from "react";
import heaven from "../Images/heaven.jpg";
import "./ThirdComponent.css";
import { Container, Image } from "react-bootstrap";
const ThirdComponent = () => {
  return (
    <div className="gel-div">
      <div>
        <h3 className="text-center">
          Panoramic views of Europe’s greatest city park
        </h3>
        <div className="div-img-div">
          <Image src={heaven} alt="jdn" className="imge-gel" />
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
