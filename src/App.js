import "./App.css";
// import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import Nft1 from "./Components/Nft1";

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
    <div className="app">
    {/* <Main/> */}
    
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Trending mode={mode} toggleMode={toggleMode} />

      <Notable mode={mode} toggleMode={toggleMode} />
      <Avalanch mode={mode} toggleMode={toggleMode} />
      <Hot mode={mode} toggleMode={toggleMode} />

      <Browse mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
      <Nft1/>

      {/* <BrowserRouter>
        <Switch>
          <Route  path="/" component={Main} />
          <Route  path="/nft" component={Nft1} />
          </Switch>
          </BrowserRouter> */}
          </div>
  );
}

export default App;
