import React from "react";
import RechartsExample from "./components/RechartsExample";
import ChartJsExample from "./components/ChartJsExample";
import Header from "./components/Header";
import GrowthStage from "./components/ChartJsExample";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ChartJsExample />
      </div>
      {/* <GrowthStage /> */}
      {/* <RechartsExample /> */}
    </div>
  );
}

export default App;
