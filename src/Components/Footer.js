import React from "react";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineReddit } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#1868b7", color: "white" }}>
        <div className="container-fluid  py-5 px-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3>Stay in the loop</h3>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </p>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your email address"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary signup"
                  type="button"
                  id="button-addon2"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3>Join the community</h3>
              <div>
                <ul className="icon">
                  <li>
                    <TbBrandTwitter />
                  </li>
                  <li>
                    <TbBrandInstagram />
                  </li>
                  <li>
                    <TbBrandDiscord />
                  </li>
                  <li>
                    <AiOutlineReddit />
                  </li>
                  <li>
                    <TbBrandTwitter />
                  </li>
                  <li>
                    <FiYoutube />
                  </li>
                  <li>
                    <TbBrandTiktok />
                  </li>
                  <li>
                    <CgMail />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer-opensea">
                <img
                  src="https://opensea.io/static/images/logos/opensea-white.svg"
                  alt=""
                  className="logo-icon"
                />
                <br />
                <br />
                <h5>OpenSea</h5>
                <br />
                <p>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </p>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Marketplace</h5>
                <ul className="footer2-list">
                  <li>All NFTs</li>
                  <li>Solana NFTs</li>
                  <li>Art</li>
                  <li>Collectibles</li>
                  <li>Domain Names</li>
                  <li>Music</li>
                  <li>Photography</li>
                  <li>Sports</li>
                  <li>Trading Cards</li>
                  <li>Utility</li>
                  <li>Virtual Worlds</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">My Account</h5>
                <ul className="footer2-list">
                  <li>Profile</li>
                  <li>Favorites</li>
                  <li>Watchlist</li>
                  <li>My Collections</li>
                  <li>Settings</li>
                </ul>
                <h5 className="list-heading">Stats</h5>
                <ul className="footer2-list">
                  <li>Rankings</li>
                  <li>Activity</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Resources</h5>
                <ul className="footer2-list">
                  <li>Learn</li>
                  <li>Help Center</li>
                  <li>Platform Status</li>
                  <li>Partners</li>
                  <li>Taxes</li>
                  <li>Blog</li>
                  <li>Docs</li>
                  <li>Newsletter</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                {" "}
                <h5 className="list-heading">Company</h5>
                <ul className="footer2-list">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Ventures</li>
                  <li>Partners</li>
                  <li>Grants</li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
