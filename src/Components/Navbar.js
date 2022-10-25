import React from "react";
// import { icons } from "react-icons";
import Logo from "./Images/opensea.svg";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

export default function Navbar() {
  return (
    <section>
      <div>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid px-5">
            {/* <img src={Logo} alt="" width={30} /> */}
            {/* <a className="navbar-brand" href="#" style={{fontSize:'20px', fontWeight:'700'}}>openSea</a> */}

            <form className="input-1 d-flex" role="search">
              {/* <input
              className="form-control ms-2 ms-2"
              type="search"
              placeholder="Search items, collections and accounts"
              aria-label="Search"
            /> */}
            </form>
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    ORIGINS NFT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Stats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Create
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="nav-icons navicon23">
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
    </section>
  );
}
