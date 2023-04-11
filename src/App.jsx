import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App h-full w-screen absolute left-0 top-0 bg-red-600">
      <Home />
    </div>
  );
}

export default App;
