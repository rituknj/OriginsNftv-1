import React from "react";
import Slider from "./Slider1";
import "./Main.css";

export default function Main() {
  return (
    <section>
      <div className="container-fluid  py-5 px-5">
        <h1 className="heading-1">Explore, collect, and sell NFTs</h1>

        <div>
          <div class="input-group12 mb-3">
            {/* <span class="input-group-text" id="basic-addon1">
              @
            </span> */}
            <input
              type="text"
              class="form-control"
              placeholder="Search Web3"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
