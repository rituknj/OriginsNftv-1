import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cardimage from "./Images/nftcard1.png";
import Cardimage1 from "./Images/nftcard2.png";
import Cardimage2 from "./Images/nftcard3.png";
import Cardimage3 from "./Images/nftcard4.png";
import Cardimage12 from "./Images/export-collection-card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import small2 from "../Components/Images/smalllogo2.png";
import Card from "react-bootstrap/Card";
import Checkicons from "./Images/check-icon.png";
import Image2 from "../Components/Images/hotimg2.png";
import Smallimg1 from "../Components/Images/new-img1.png";
import "./Nft1.css";
import Searchpanal from "./Searchpanal";
import MainNav from "./MainNav";

export default function Nft1() {
  return (
    <div>
      <MainNav />
      <div className="container-fluid background-up">
        <h1 className="explore-header">
          Explore
        </h1>

        <Tabs>
          <TabList>
            <Tab>NFTs</Tab>
            <Tab>Collections</Tab>
            <Tab>Users</Tab>
          </TabList>

          <TabPanel>
            <Searchpanal />
            <div>
              <div className="row" style={{margin:'10px'}}>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        Red Angrybol <img src={Checkicons} alt="" />
                      </h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>

                    <ul className="card-section">
                      <div className="row" >
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Price</span>
                          <p className="card-se">0.548 ETH</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Highest Bid</span>
                          <p className="card-se">No bids yet</p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage1}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Red Angrybol <img src={Checkicons} alt="" />
                      </h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="card-section">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Price</span>
                          <p className="card-se">0.548 ETH</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Highest Bid</span>
                          <p className="card-se">No bids yet</p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage2}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Red Angrybol
                        <img src={Checkicons} alt="" />{" "}
                      </h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="card-section">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Price</span>
                          <p className="card-se">0.548 ETH</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Highest Bid</span>
                          <p className="card-se">No bids yet</p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage3}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Red Angrybol <img src={Checkicons} alt="" />
                      </h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="card-section">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Price</span>
                          <p className="card-se">0.548 ETH</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <span className="card-he">Highest Bid</span>
                          <p className="card-se">No bids yet</p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/*-------------------------------------------------- COLLECTIONS ------------------------------------------------------------------------ */}

          <TabPanel>
            <Searchpanal />
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Cardimage12} />
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
                          <span className="text32">Hot Cheetos </span>
                          <span className="tick-icons"></span>
                        </Card.Title>
                        <ul className="card-section">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">All Time Volume</span>
                              <p className="card-se">44.6K ETH</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">Floor Price</span>
                              <p className="card-se">2.76 ETH</p>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Cardimage12} />
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
                          <span className="text32">Hot Cheetos </span>
                          <span className="tick-icons"></span>
                        </Card.Title>
                        <ul className="card-section">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">All Time Volume</span>
                              <p className="card-se">44.6K ETH</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">Floor Price</span>
                              <p className="card-se">2.76 ETH</p>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Cardimage12} />
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
                          <span className="text32">Hot Cheetos </span>
                          <span className="tick-icons"></span>
                        </Card.Title>
                        <ul className="card-section">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">All Time Volume</span>
                              <p className="card-se">44.6K ETH</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">Floor Price</span>
                              <p className="card-se">2.76 ETH</p>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Cardimage12} />
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
                          <span className="text32">Hot Cheetos </span>
                          <span className="tick-icons"></span>
                        </Card.Title>
                        <ul className="card-section">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">All Time Volume</span>
                              <p className="card-se">44.6K ETH</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="card-he">Floor Price</span>
                              <p className="card-se">2.76 ETH</p>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
              </div>
            </div>
          </TabPanel>

          {/*---------------------------------------------- USERS----------------------------------------------------------------------------- */}

          <TabPanel>
            <Searchpanal />
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Image2} />
                      <Card.Body>
                        <Card.Title className="card-body12">
                          <span>
                            {" "}
                            <img
                              src={small2}
                              alt=""
                              style={{
                                display: "inline-flex",
                                borderRadius: "100%",
                              }}
                              className="card-image1"
                            />{" "}
                          </span>
                          {/* <span className="text32">Mohammad Ali</span> */}
                        </Card.Title>
                        <ul className="card-section1">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="user-na">Hot Cheetos </span>
                              <p className="user-na">1.76K Followers</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <button className="follow-button">Follow</button>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Image2} />
                      <Card.Body>
                        <Card.Title className="card-body12">
                          <span>
                            {" "}
                            <img
                              src={small2}
                              alt=""
                              style={{
                                display: "inline-flex",
                                borderRadius: "100%",
                              }}
                              className="card-image1"
                            />{" "}
                          </span>
                          {/* <span className="text32">Mohammad Ali</span> */}
                        </Card.Title>
                        <ul className="card-section1">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="user-na">Hot Cheetos </span>
                              <p className="user-na">1.76K Followers</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <button className="follow-button">Follow</button>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Image2} />
                      <Card.Body>
                        <Card.Title className="card-body12">
                          <span>
                            {" "}
                            <img
                              src={small2}
                              alt=""
                              style={{
                                display: "inline-flex",
                                borderRadius: "100%",
                              }}
                              className="card-image1"
                            />{" "}
                          </span>
                          {/* <span className="text32">Mohammad Ali</span> */}
                        </Card.Title>
                        <ul className="card-section1">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="user-na">Hot Cheetos </span>
                              <p className="user-na">1.76K Followers</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <button className="follow-button">Follow</button>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <SwiperSlide>
                    {" "}
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src={Image2} />
                      <Card.Body>
                        <Card.Title className="card-body12">
                          <span>
                            {" "}
                            <img
                              src={small2}
                              alt=""
                              style={{
                                display: "inline-flex",
                                borderRadius: "100%",
                              }}
                              className="card-image1"
                            />{" "}
                          </span>
                        </Card.Title>
                        <ul className="card-section1">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <span className="user-na">Hot Cheetos </span>
                              <p className="user-na">1.76K Followers</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <button className="follow-button">Follow</button>
                            </div>
                          </div>
                        </ul>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </div>
              </div>
              <div></div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
