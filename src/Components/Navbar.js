// import { icons } from "react-icons";
import React, { useState } from "react";

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
        <div>
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
                  {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    ORIGINS NFT
                  </a>
                </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    >
                      Explore
                    </a>
                  </li>
                  <li className="nav-item">
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
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    >
                      Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    >
                      Create
                    </a>
                  </li>

                  {!show1 ? (
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
                  )}
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
        <div className="container-fluid  py-5 px-5">
          <h1
            className="heading-1"
            style={{
              color: props.mode === "light" ? "black " : "white ",
            }}
          >
            Explore, collect, and sell NFTs
          </h1>
          {!show1 ? (
            ""
          ) : (
            <div className="main-button">
              <button
                className="explore"
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                  // background: props.mode === "light" ? "black " : "white ",
                }}
              >
                Explore
              </button>
              <button
                className="sell"
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                  // backgroundColor: props.mode === "light" ? "black " : "white ",
                }}
              >
                Sell
              </button>
            </div>
          )}
          <div>
            {show1 ? (
              ""
            ) : (
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
            )}
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
