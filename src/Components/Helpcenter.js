import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Refresh from "./Images/refresh.png";
import "./Helpcenter.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/hotimg1.png";
import Smallimg1 from "../Components/Images/new-img3.png";
import Ceo from "./Images/images-ceo.png";
import Comma from "./Images/comma.png";

import Card from "react-bootstrap/Card";
import Footer from "./Footer";

export default function Collectionsearchpanal() {
  return (
    <>
      <div>
        <div>
          <div
            className="color-nav"
            style={{ background: " rgba(166, 166, 166, 0.5) " }}
          >
            <nav className="navbar navbar-expand-lg bg-transparent">
              <div className="container-fluid px-5">
                <a className="navbar-brand" href="/">
                  {/* <img src={Logo} alt="" className="logo-1" /> */}

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
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        >
                          Explore-much
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
                      >
                        Stats
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Create
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="container-fluid background-image">
          <div className="row">
            <div className="col-6">
              <h1 className="help-header">Welcome to Origins Marketplace</h1>
              <p className="help-para">
                Lorem ipsum dolor dit amet Lorem ipsum dolor
                <br /> sit amet Lorem Ipsum dolor sit amet{" "}
              </p>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="container text-align-center">
          <div className="section-second">
            <h2 className="second-section">Why partner with Origins</h2>
            <p className="section-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              similique eaque fugiat <br />
              aliquid unde, neque repudiandae debitis nihil harum, dignissimos
              corporis sit aut alias porro <br />
              deleniti ex autem! Natus sunt rem fugit? Iure nulla ipsam ullam.
              Quam ut culpa, quisquam <br />
              corrupti atque sit rem. Reiciendis delectus fugiat perferendis
              quisquam? Nulla.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="card-11"></div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="card-11"></div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="card-11"></div>
            </div>
          </div>
          <div>
            <div className="py-5">
              <h3 className="meet-section">Meet our partners</h3>
            </div>
            <div className="row " style={{ margin: "30px" }}>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <img src={Ceo} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <img src={Comma} alt="" className="comma-image" />
              <div>
                <h2 className="h2-place">Placeholder: Origins Marketplace is excellent</h2><br/><br/>
                <p className="para-place">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  labore molestiae impedit doloribus odio magnam sint quas
                  sapiente dolor nesciunt?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  labore molestiae impedit doloribus odio magnam sint quas
                  sapiente dolor nesciunt?
                </p><br/><br/>
                <div>
                  <span className="sp">Jane Doe</span><br/>
                  <span className="sp">CEO, Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
