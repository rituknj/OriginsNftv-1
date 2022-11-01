import React from "react";
import Slider from "./Slider1";
import "./Main.css";

export default function Main(props) {
  return (
    <div className={`Main  main-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid  py-5 px-5">
        <h1
          className="heading-1"
          style={{
            color: props.mode === "light" ? "black " : "white ",
          }}
        >
          Explore, collect, and sell NFTs
        </h1>
        <div className="main-button" >
          <button className="explore"  style={{
            color: props.mode === "light" ? "black " : "white ",
            // background: props.mode === "light" ? "black " : "white ",
          }}>Explore</button>
          <button className="sell"  style={{
            color: props.mode === "light" ? "black " : "white ",
            // backgroundColor: props.mode === "light" ? "black " : "white ",
          }}>Sell</button>
        </div>

        {/* <div>
          <div
            class="input-group12 mb-3"
            style={{
              color: props.mode === "light" ? "black " : "white ",
            }}
          >
           
            <input
              type="text"
              className="form-control"
              placeholder="Search Web3"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{
                color: props.mode === "light" ? "black " : "white ",
              }}
            />
          </div>
          <Slider
            style={{
              color: props.mode === "light" ? "black " : "white ",
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
