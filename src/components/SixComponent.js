// import { Image } from "@chakra-ui/react";
// import React from "react";
// import dinning from "../Images/dinning.jpg";
// import kitchen from "../Images/kitchen.jpg";
// import "./SixComponent.css";

// const SixComponent = () => {
//   return (
//     <div className="sixth">
//       <div>
//         <Image className="img" src={dinning} alt="gjj" />
//       </div>

//       <div>
//         {" "}
//         <Image className="img-two" src={kitchen} alt="gjj" />
//       </div>
//     </div>
//   );
// };

// export default SixComponent;

import React from "react";
import dinning from "../Images/dinning.jpg";
import kitchen from "../Images/kitchen.jpg";
import "./SixComponent.css";

const SixComponent = () => {
  return (
    <div className="div-main-div">
      <div>
        {" "}
        <img src={dinning} alt="duyj" className="div-img-one" />{" "}
      </div>
      <div>
        {" "}
        <img src={kitchen} alt="fuh" className="div-img-two" />{" "}
      </div>
    </div>
  );
};

export default SixComponent;
