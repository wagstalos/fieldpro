import React from "react";
import RechartsExample from "./components/RechartsExample";
import ChartJsExample from "./components/ChartJsExample";
//import GrowthStage from "./components/GrowthStage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Filed Pro</h1>
      {/* <GrowthStage /> */}
      <RechartsExample />
      <ChartJsExample />
    </div>
  );
}

export default App;
