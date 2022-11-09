import Nav from "react-bootstrap/Nav";
import NFtcards from "./NFtcards";
import Vector from "./Images/filter-vector.png";
import Vector2 from "./Images/reload-vector.png";
import Imagenft from "./Images/vector-icon.png";
import Imagenft1 from "./Images/vector-icon.png";
import Cardimage from "./Images/nftcard1.png";
import Cardimage1 from "./Images/nftcard2.png";
import Cardimage2 from "./Images/nftcard3.png";
import Cardimage3 from "./Images/nftcard4.png";

// import React, { useRef, useState } from "react";
import "./Nft.css";

function TabsExample() {
  return (
    <div className="container-fluid">
      <div>
        <h1 className="explore-heading">Explore</h1>
      </div>
      <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              NFTs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Collections
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Users
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <button className="filter-button">
              <img src={Vector} alt="" />
              Filters
            </button>
            <button className="filter-button1">
              <img src={Vector2} alt="" />
            </button>
            <div className="input-group mb-3">
              {/* <span className="input-group-text" id="basic-addon1">@</span> */}
              <input
                type="text"
                className="form-control"
                placeholder="Search by NFTs"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="dropdown">
                <button
                  className="btn22 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recently Listed
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <button className="scroll-button">
                <img src={Imagenft} alt="" /> <img src={Imagenft1} alt="" />
              </button>
            </div>
          </div>
          <div className="row px-5 cards-section">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  src={Cardimage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Red Angrybol</h5>
                  <p className="card-text">Recordian Headset</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ display: "grid" }}>
                    <span>Price</span>0.548 ETH{" "}
                  </li>
                  <li className="list-group-item" style={{ display: "grid" }}>
                    {" "}
                    <span>Highest Bid</span>No bids yet
                  </li>
                  {/* <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  src={Cardimage1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Red Angrybol</h5>
                  <p className="card-text">Recordian Headset</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ display: "grid" }}>
                    <span>Price</span>0.548 ETH{" "}
                  </li>
                  <li className="list-group-item" style={{ display: "grid" }}>
                    {" "}
                    <span>Highest Bid</span>No bids yet
                  </li>
                  {/* <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  src={Cardimage2}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Red Angrybol</h5>
                  <p className="card-text">Recordian Headset</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ display: "grid" }}>
                    <span>Price</span>0.548 ETH{" "}
                  </li>
                  <li className="list-group-item" style={{ display: "grid" }}>
                    {" "}
                    <span>Highest Bid</span>No bids yet
                  </li>
                  {/* <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="card" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  src={Cardimage3}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Red Angrybol</h5>
                  <p className="card-text">Recordian Headset</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ display: "grid" }}>
                    <span>Price</span>0.548 ETH{" "}
                  </li>
                  <li className="list-group-item" style={{ display: "grid" }}>
                    {" "}
                    <span>Highest Bid</span>No bids yet
                  </li>
                  {/* <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsExample;
