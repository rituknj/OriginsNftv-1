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

        <div>
          <div
            class="input-group12 mb-3"
            style={{
              color: props.mode === "light" ? "black " : "white ",
            }}
          >
            {/* <span class="input-group-text" id="basic-addon1">
              @
            </span> */}
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
        </div>
      </div>
    </div>
  );
}
