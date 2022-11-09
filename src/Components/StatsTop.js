import React from "react";

export default function StatsTop() {
  return (
    <div>
      {/* <MainNav /> */}

      <div>
        <div
          className="color-nav"
          style={{ background: " rgba(166, 166, 166, 0.5) " }}
        >
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

              {/* <div>
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
              </div> */}
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
            {/* <div className="row">
              <div className="col-6">
                <div>
                 
                  <img src={Inside} alt="" className="inside-img" />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <img src={Inside} alt="" className="insi-card"/>
                  <img src={Inside1} alt="" className="insi-cards"/>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <h2 className="body-head py-5"> What's hot</h2>
      </div>
    </div>
  );
}
