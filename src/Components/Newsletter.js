import React from "react";
import "./Newsletter.css";
import News from "./Images/testimonial-bg-remove.png";
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
                        <div className="dropdown-content">
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
          <div className="container" >
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 iimg" >
                <img src={News} alt="" className="newsletter-img"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 iimg2">
                <h1 className="news-head">Be the first to know<br/> our latest updates!</h1>
                <p className="para-news">
                  Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Quis
                  consequatur magnam <br/>hic aspernatur molestias neque esse ullam<br/>
                  consequuntur deserunt totam.
                </p>
                <div className="input-group1225 mb-3">
                  <input
                    type="text"
                    className="form-control002"
                    placeholder="Enter email address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  
                </div>
                <button type="button" className="btn btn-warning">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
