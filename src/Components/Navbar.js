// import { icons } from "react-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider1";
import "./Main.css";

import Logo from "./Images/logo.png";
import Logo2 from "./Images/logowhitemode.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import "./Navbar.css";

export default function Navbar(props) {
  const [show1, setShow1] = useState(false);
  // const [mode, setMode] = useState(false);
  return (
    <>
      <div className={`Navbar  navbar-${props.mode} bg-${props.mode}`}>
        <div style={{ background: " rgba(166, 166, 166, 0.5)" }}>
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid px-5">
              <a className="navbar-brand" href="/">
                {!show1 ? (
                  <img
                    src={Logo}
                    alt=""
                    className="logo-1"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  />
                ) : (
                  <img
                    src={Logo2}
                    alt=""
                    className="logo-1"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  />
                )}
              </a>

              {/* <form className="input-1 d-flex" role="search">
              <input
                className="form-control ms-2 ms-2"
                type="search"
                placeholder="Search items, collections and accounts"
                aria-label="Search"
              />
            </form> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ float: "right" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <input
                    type="text"
                    className="form-control11"
                    placeholder="Search items, collection, accounts"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    // style={{
                    //   color: props.mode === "light" ? "black " : "white ",
                    // }}
                  />
                  {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    ORIGINS NFT
                  </a>
                </li> */}
                  <div className="dropdown">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/exploreart"
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      >
                        Inside Page
                      </a>
                    </li>
                  </div>

                  <div class="dropdown">
                    <button
                      class="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          All NFTs
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Recordian
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Music
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Photography
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Videos
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Art
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    >
                      Stats
                    </a>
                    <div class="dropdown-content">
                      <a href="/">Rankings </a>
                      <a href="/">Activities</a>
                    </div>
                  </li> */}
                  <div class="dropdown">
                    <button
                      class="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stats
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Rankings
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resouces
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Docs
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Patterns
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Advertisement
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Videos
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Art
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Create
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Favourite
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Watchlist
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          My collections
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Night Mode
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    >
                      Stats
                    </a>
                    <div class="dropdown-content">
                      <a href="/">Rankings </a>
                      <a href="/">Activities</a>
                    </div>
                  </li> 

                  {/* {!show1 ? (
                    ""
                  ) : (
                    <div
                      class="input-group12 mb-3"
                      style={{
                        color: props.mode === "light" ? "black " : "white",
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
                  )} */}
                  {/* <form className="input-1 d-flex" role="search">
              <input
                className="form-control ms-2 ms-2"
                type="search"
                placeholder="Search items, collections and accounts"
                aria-label="Search"
              />
            </form> */}
                  {/* <li className="nav-icons-2">
                  <div
                    className={`form-check form-switch  text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    <span
                      onClick={() => {
                        setShow1(!show1);
                      }}
                    >
                      <BsFillSunFill onClick={props.toggleMode} size={30} />
                    </span>
                  </div>
                </li> */}
                </ul>
              </div>

              <div>
                <ul className="nav-icons navicon23">
                  <li className="nav-icons-2">
                    <div
                      className={`form-check form-switch  text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                    >
                      <span
                        onClick={() => {
                          setShow1(!show1);
                        }}
                      >
                        <BsFillSunFill onClick={props.toggleMode} size={30} />
                      </span>
                    </div>
                  </li>
                  <li className="nav-icons-1">
                    <CgProfile
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    />
                  </li>
                  <li className="nav-icons-1">
                    <MdOutlineAccountBalanceWallet
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    />
                  </li>
                  <li className="nav-icons-1">
                    <AiOutlineShoppingCart
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/*       ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        style={{
          color: props.mode === "light" ? "black " : "white ",
          backgroundColor: props.mode === "light" ? "white " : "#212529 ",
        }}
      >
        <div className="container-fluid background-main py-5 px-5">
          <div></div>
          <h1
            className="heading-1"
            style={{
              color: props.mode === "light" ? "black " : "white ",
            }}
          >
            Explore, collect, and sell NFTs
          </h1>
          {/* {!show1 ? (
            ""
          ) : ( */}
          <div className="main-button">
            <Link
              className="explore"
              to="/nft"
              style={{
                color: props.mode === "light" ? "black " : "white ",
                // background: props.mode === "light" ? "black " : "white ",
              }}
            >
              Explore
            </Link>
            <Link
              className="sell"
              to="/statstop"
              style={{
                color: props.mode === "light" ? "black " : "white ",
                // backgroundColor: props.mode === "light" ? "black " : "white ",
              }}
            >
              Sell
            </Link>
          </div>
          {/* )} */}
          <div>
            {/* {show1 ? (
              ""
            ) : (
              <div
                class="input-group122 mb-3"
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
            )} */}
            <Slider
              style={{
                color: props.mode === "light" ? "black " : "white ",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
