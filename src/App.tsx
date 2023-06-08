import Header from "./components/Header";
import GrowthStage from "./components/GrowthStage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <GrowthStage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
