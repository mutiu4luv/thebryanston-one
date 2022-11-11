import "./App.css";
import NavBar from "./components/NavBar";
import ThirdComponent from "./components/ThirdComponent";

import FifthComponent from "./components/FifthComponent";

import SixComponent from "./components/SixComponent";
import EightComponent from "./components/EightComponent";
import NinethComponent from "./components/NinethComponent";
import TenthComponent from "./components/TenthComponent";
import { Container } from "@chakra-ui/react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import FouthComponent from "./components/FouthComponent";

function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FouthComponent />
      <FifthComponent />
      <SixComponent />
      <EightComponent />
      <NinethComponent />
      {/* <TenthComponent /> */}
    </div>
  );
}

export default App;
