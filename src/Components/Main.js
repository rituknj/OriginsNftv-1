import React, { useState } from "react";
import "./Main.css";
import Navbar from "./Navbar";
import Trending from "./Trending";
import Notable from "./Notable";
import Avalanch from "./Avalanch";
import Hot from "./Hot";
import Browse from "./Browse";
import Footer from "./Footer";

export default function Main() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Trending mode={mode} toggleMode={toggleMode} />

        <Notable mode={mode} toggleMode={toggleMode} />
        <Avalanch mode={mode} toggleMode={toggleMode} />
        <Hot mode={mode} toggleMode={toggleMode} />

        <Browse mode={mode} toggleMode={toggleMode} />
        <Footer mode={mode} toggleMode={toggleMode} />

        {/* <Navbar />
        <Trending />
        <Notable />
        <Avalanch />
        <Hot />
        <Browse />
        <Footer /> */}
      </div>
    </>
  );
}
