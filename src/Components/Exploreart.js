import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MainNav from "./MainNav";
import "./Exploreart.css";
import Inside from "./Images/inside.png";
import Inside1 from "./Images/export-collection-card.png";
import Smallimg1 from "../Components/Images/new-img3.png";
import Image1 from "../Components/Images/newimg1.png";
import Logo from "./Images/logo.png";
import Logo2 from "./Images/logowhitemode.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import Footer from "./Footer";

import Card from "react-bootstrap/Card";

export default function Exploreart() {
  return (
    <div>
      {/* <MainNav /> */}

      <div>
        <div className="color-nav" style={{ background: " rgba(166, 166, 166, 0.5) " }}>
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid px-5">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" className="logo-1" />

                {/* <img
                    src={Logo2}
                    alt=""
                    className="logo-1"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  /> */}
              </a>

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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{paddingLeft:'20px'}}>
                  <input
                    type="text"
                    className="form-control11"
                    placeholder="Search items, collection, accounts"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />

                  <div className="dropdown">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/nft"
                        // style={{
                        //   color: props.mode === "light" ? "black " : "white ",
                        // }}
                      >
                        Explore
                      </a>
                      <div class="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                      </div>
                    </li>
                  </div>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      // style={{
                      //   color: props.mode === "light" ? "black " : "white ",
                      // }}
                    >
                      Stats
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      // style={{
                      //   color: props.mode === "light" ? "black " : "white ",
                      // }}
                    >
                      Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      // style={{
                      //   color: props.mode === "light" ? "black " : "white ",
                      // }}
                    >
                      Create
                    </a>
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
                    <div>
                      <span>
                        <BsFillSunFill size={30} />
                      </span>
                    </div>
                  </li>
                  <li className="nav-icons-1">
                    <CgProfile />
                  </li>
                  <li className="nav-icons-1">
                    <MdOutlineAccountBalanceWallet />
                  </li>
                  <li className="nav-icons-1">
                    <AiOutlineShoppingCart />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid background-img">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 className="explore-head">Explore Art</h1>
            <p className="inside-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur dolorem
              <br /> quos rem et, nesciunt nisi reprehenderit veritatis
              excepturi unde nulla?
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row">
              <div className="col-6">
                <div>
                  {/* <img src={} alt=""/> */}
                  <img src={Inside} alt="" className="inside-img" />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <img src={Inside} alt="" className="insi-card"/>
                  <img src={Inside1} alt="" className="insi-cards"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="body-head py-5"> What's hot</h2>
      </div>
      <div className="row " style={{margin:'30px'}}>
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={Smallimg1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR </span>
                  <span className="tick-icons"></span>
                </Card.Title>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </div>
        <div className="see-more-button">
        <button className="button-see">See More</button>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
}
