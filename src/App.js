import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nft1 from "./Components/Nft1";
import Home from "./Components/pages/Home";
import Exploreart from "./Components/Exploreart";
import StatsTop from "./Components/StatsTop";
import Helpcenter from "./Components/Helpcenter";
import Newsletter from "./Components/Newsletter";
import Mycollections from "./Components/Mycollections";
import Profile from "./Components/Profile"

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
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/nft"
            element={<Nft1 mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/exploreart"
            element={<Exploreart mode={mode} toggleMode={toggleMode} />}
          />
           <Route
            path="/statstop"
            element={<StatsTop mode={mode} toggleMode={toggleMode} />}
          />
           <Route
            path="/helpcenter"
            element={<Helpcenter mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/helpcenter-newsletter"
            element={<Newsletter mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/mycollections"
            element={<Mycollections mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/profile"
            element={<Profile mode={mode} toggleMode={toggleMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
