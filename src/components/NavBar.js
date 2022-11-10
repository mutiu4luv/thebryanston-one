import React from "react";
import logo192 from "../../src/Images/logo192.png";
import Navbar2 from "./Toggle";
import PersistentDrawerRight from "./Toggle";
import Toggle from "./Toggle";
// import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div
        className="first"
        style={{
          display: "flex",

          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>THE BRYANSTON</div>
        <div>
          <img
            style={{ width: "35px", height: "35px" }}
            src={logo192}
            className="App-logo"
            alt="logo"
          />
        </div>
        <div>{/* <PersistentDrawerRight /> */}</div>
      </div>
    </div>
  );
};

export default NavBar;
