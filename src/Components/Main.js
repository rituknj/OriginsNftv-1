import React, { useState } from "react";
import Slider from "./Slider1";
import "./Main.css";
import Navbar from "./Navbar";
import Trending from "./Trending";
import Notable from "./Notable";
import Avalanch from "./Avalanch";
import Hot from "./Hot";
import Browse from "./Browse";
import Footer from "./Footer";


export default function Main() {
  

  return <>

    <div>
      <Navbar/>
      <Trending/>
      <Notable/>
      <Avalanch/>
      <Hot/>
      <Browse/>
      <Footer/>
    </div>
  </>;
}
