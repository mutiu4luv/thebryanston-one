import "./App.css";
import NavBar from "./components/NavBar";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FouthComponent from "./components/FouthComponent";
import FifthComponent from "./components/FifthComponent";
import First from "./components/First";
import SixComponent from "./components/SixComponent";
import EightComponent from "./components/EightComponent";
import NinethComponent from "./components/NinethComponent";
import TenthComponent from "./components/TenthComponent";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <First /> */}
      <FirstComponent />
      {/* <SecondComponent /> */}
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
