import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import ShouldTakeTest from "./components/partials/ShouldTakeTest";
import Results from "./components/partials/Results";
import Advantages from "./components/partials/Advantages";
import PriceList from "./components/partials/PriceList";
import Testimoni from "./components/partials/Testimoni";
import Disadvantages from "./components/partials/Disadvantages";
import FAQ from "./components/partials/FAQ";
import Footer from "./components/partials/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App h-full w-screen absolute left-0 top-0 bg-[#0b080f]">
      <Home />
      <ShouldTakeTest />
      <Results />
      <Advantages />
      <PriceList />
      {/* <Testimoni /> */}
      <Disadvantages />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
