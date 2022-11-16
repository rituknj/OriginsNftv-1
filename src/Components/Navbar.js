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
import NFTs from "./Images/Ellipse 9.png";
import Recordion from "./Images/Ellipse 2.png";
import Art from "./Images/Ellipse 3.png";
import Collectibles from "./Images/Ellipse 4.png";
import Music from "./Images/Ellipse 5.png";
import Photography from "./Images/Ellipse 6.png";
import Videos from "./Images/Ellipse 7.png";
import "./Navbar.css";
import Form from "react-bootstrap/Form";

export default function Navbar(props) {
  const [show1, setShow1] = useState(false);
  // const [mode, setMode] = useState(false);
  return (
    <>
      <div className={`Navbar  navbar-${props.mode} bg-${props.mode}`}>
        <div style={{ background: " rgba(166, 166, 166, 0.5)" }}>
          <nav className="navbar navbar-expand-lg ">
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
                  <div className="dropdown">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/statstop"
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      >
                        Stats1
                      </a>
                    </li>
                  </div>
                  <div className="dropdown">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/helpcenter"
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      >
                        Helpcenter
                      </a>
                    </li>
                  </div>
                  <div className="dropdown">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/helpcenter-newsletter"
                        style={{
                          color: props.mode === "light" ? "black " : "white ",
                        }}
                      >
                        Helpcenter-newsletter
                      </a>
                    </li>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </button>
                    <ul className="dropdown-menu ex">
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={NFTs} alt="" className="allnft" />
                          All NFTs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Recordion} alt="" className="allnft" />
                          Recordian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Art} alt="" className="allnft" />
                          Art
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Collectibles} alt="" className="allnft" />
                          Collectibles
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Music} alt="" className="allnft" />
                          Music
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Photography} alt="" className="allnft" />
                          Photography
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={Videos} alt="" className="allnft" />
                          Videos
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn nav-link active "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Stats
                    </button>
                    <ul className="dropdown-menu stats">
                      <li>
                        <a className="dropdown-item" href="/">
                          Rankings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="/helpcenter"
                    >
                      Resources
                    </button>
                    <ul className="dropdown-menu resources">
                      <li>
                        <a className="dropdown-item" href="/">
                          Docs
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Patterns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Advertisement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Newsletter
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn nav-link active"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Create
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Favourite
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Watchlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          My collections
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
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
                    <div className="dropdown-content">
                      <a href="/">Rankings </a>
                      <a href="/">Activities</a>
                    </div>
                  </li> 

                  {/* {!show1 ? (
                    ""
                  ) : (
                    <div
                      className="input-group12 mb-3"
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
                    {/* <CgProfile
                      style={{
                        color: props.mode === "light" ? "black " : "white ",
                      }}
                    /> */}
                    <div className="dropdown">
                      <button
                        className="btn nav-link active"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <CgProfile
                          style={{
                            color: props.mode === "light" ? "black " : "white ",
                          }}
                        />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Favourite
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Watchlist
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            My collections
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Night Mode<span>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              // label="Check this switch"
                            />
                          </Form></span>
                          </a>
                        
                        </li>
                      </ul>
                    </div>{" "}
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
        <div className="container-fluid background-main py-5 ">
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
                className="input-group122 mb-3"
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
