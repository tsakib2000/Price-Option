import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import CustomNav from "./Components/CustomNav/CustomNav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import LineChart from "./Components/LineChart/LineChart";
import Phones from "./Components/Phones/phones";


function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <CustomNav></CustomNav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
