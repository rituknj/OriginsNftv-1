import "./App.css";
// import Footer from "./Components/Footer";
import React, { useState, useEffect } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Notable from "./Components/Notable";
import Avalanch from "./Components/Avalanch";
import Browse from "./Components/Browse";
import Footer from "./Components/Footer";
// import Toyslider from "./Components/Toyslider";
import Table from "./Components/Table";
import Hot from "./Components/Hot";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Trending mode={mode} toggleMode={toggleMode} />
      {/* <Table /> */}
      <Notable mode={mode} toggleMode={toggleMode} />
      <Avalanch mode={mode} toggleMode={toggleMode} />
      <Hot mode={mode} toggleMode={toggleMode} />
      {/*       <Toyslider /> */}
      <Browse mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
