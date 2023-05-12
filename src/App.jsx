import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import ShouldTakeTest from "./components/partials/ShouldTakeTest";
import Results from "./components/partials/Results";
import Advantages from "./components/partials/Advantages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App h-full w-screen absolute left-0 top-0 bg-red-600">
      <Home />
      <ShouldTakeTest />
      <Results />
      <Advantages />
    </div>
  );
}

export default App;
