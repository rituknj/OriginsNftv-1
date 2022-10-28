import React from "react";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
// import { CgMail } from "react-icons/cg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#000", color: "white" }}>
        <div className="container-fluid  py-5 px-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 className="keep-head">Keep posted</h3>
              <p className="subs-para">
                Subscribe to our newsletter to stay in the loop with our newest
                feature
                <br /> release, NFT drops, and tips and tricks for navigating
                Origins Marketplace.
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button className="signup" type="button" id="button-addon2">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 className="join-header">Join the community</h3>
              <div>
                <ul className="icon">
                  <li className="twitter-icons">
                    <BsDiscord />
                  </li>
                  <li className="twitter-icons">
                    <BsFacebook />
                  </li>
                  <li className="twitter-icons">
                    <BsTwitter />
                  </li>
                  <li className="twitter-icons">
                    <FaTelegramPlane />
                  </li>
                  {/* <li>
                    <TbBrandTwitter />
                  </li> */}
                  <li className="twitter-icons">
                    <BsYoutube />
                  </li>
                  <li className="twitter-icons">
                    <FiInstagram />
                  </li>
                  {/* <li className="twitter-icons">
                    <CgMail />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-opensea">
                {/* <img
                  src="https://opensea.io/static/images/logos/opensea-white.svg"
                  alt=""
                  className="logo-icon"
                /> */}
                <br />
                <br />
                <h5 className="origins-head">Origins Marketplace</h5>
                <br />
                <p className="origins-para">
                  The Origins Token ($ORGNS) is an
                  <br /> intercontinental cryptocurrency <br /> primed to become
                  an integral part of <br />a global ecosystem where artist,
                  <br />
                  creators, investors and the general <br />
                  public are given the freedom to <br />
                  participate in and earn profits from <br />
                  endeavours they are passionate about.
                </p>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Marketplace</h5>
                <ul className="footer2-list">
                  <li>All NFTs</li>

                  <li>Art</li>
                  <li>Collectibles</li>

                  <li>Photography</li>
                  <li>Recordian</li>
                  <li>Videos</li>
                  <li>Trending</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">My Profile</h5>
                <ul className="footer2-list">
                  <li>Overview</li>
                  <li>Favourites</li>
                  <li>Watchlist</li>
                  <li>My Collections</li>
                  <li>Settings</li>
                </ul>
                {/* <h5 className="list-heading">Stats</h5>
                <ul className="footer2-list">
                  <li>Rankings</li>
                  <li>Activity</li>
                </ul> */}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Resources</h5>
                <ul className="footer2-list">
                  <li>Docs</li>
                  <li>Partners</li>
                  <li>Advertisement</li>
                  <li>Newsletter</li>
                  <li>Socials</li>
                </ul>
              </div>
              {/* <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Company</h5>
                <ul className="footer2-list">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Ventures</li>
                  <li>Partners</li>
                  <li>Grants</li>
                </ul>
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
