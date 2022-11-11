// import React from "react";
// import { Image } from "react-bootstrap";
// import kitchen from "../Images/kitchen.jpg";
// import house from "../Images/house.jpg";
// import "./SecondComponent.css";

// import "./SecondComponent.css";

// const SecondComponent = () => {
//   return (
//     <div className="second">
//       <div className="writer"> THE MOST IMPORTANT CORNER OF HYDE PARK</div>
//       <div className="img-sec">
//         <div>
//           <Image className="img-main" src={kitchen} alt="jkg" />{" "}
//         </div>
//         <div>
//           <Image className="img-dot" src={house} alt="jkg" />{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondComponent;

import React from "react";
import "./SecondComponent.css";
import kitchen from "../Images/kitchen.jpg";
import { Typewriter } from "react-simple-typewriter";
const SecondComponent = () => {
  return (
    <div>
      <div className="mg-div-g">
        <h4 className="text-center">THE MOST IMPORTANT CORNER OF HYDE PARK</h4>
        <div className="disp-diva">
          <div className="div-flex1-div">
            <div className="by-disp">
              <div className="sp-by">
                <h4>by</h4>
              </div>
              <div>
                <hr
                  className="hr"
                  style={{ color: "black", background: "black" }}
                />{" "}
              </div>
              <div className="p-para">
                <Typewriter
                  words={[" Autography"]}
                  loop={1}
                  typeSpeed={70}
                  // deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <div className="raf">
              <div> RAFIEL VINO ARCHITECTS</div>
              <div>THE BRYANSTON </div>
            </div>
          </div>
          <div>
            <img src={kitchen} alt="hjf" className="bry-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
