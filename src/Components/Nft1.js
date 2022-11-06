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
import Image2 from "../Components/Images/hotimg2.png";

export default function Nft1() {
  return (
    <div>
      <div className="container-fluid">
        <h1 style={{ fontSize: "80px", fontWeight: "900" }}>Explore</h1>

        <Tabs>
          <TabList>
            <Tab>NFTs</Tab>
            <Tab>Collections</Tab>
            <Tab>Users</Tab>
          </TabList>

          <TabPanel>
            {/* <h2>Any content 1</h2> */}
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      {/* <li className="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage1}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      {/* <li className="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage2}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      {/* <li className="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage3}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      {/* <li className="list-group-item">Vestibulum at eros</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {/* <h2>Any content 2</h2> */}
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage12}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Hot Cheetos</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>All Time Volume</span>44.6K ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Floor Price</span>2.76 ETH
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage12}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Hot Cheetos</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage12}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage12}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {/* <h2>Any content 3</h2> */}

            <div>
              <div className="row">
                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      
                    </ul>
                  </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage1}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      
                    </ul>
                  </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage2}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      
                    </ul>
                  </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="card" style={{ width: "30rem" }}>
                    <img
                      className="card-img-top"
                      src={Cardimage3}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Red Angrybol</h5>
                      <p className="card-text">Recordian Headset</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        <span>Price</span>0.548 ETH{" "}
                      </li>
                      <li
                        className="list-group-item"
                        style={{ display: "grid" }}
                      >
                        {" "}
                        <span>Highest Bid</span>No bids yet
                      </li>
                      
                    </ul>
                  </div>
                </div> */}
                <SwiperSlide>
            {" "}
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  {/* <span className="text32">Mohammad Ali</span> */}
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  {/* <span className="text32">Mohammad Ali</span> */}
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  {/* <span className="text32">Mohammad Ali</span> */}
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  {/* <span className="text32">Mohammad Ali</span> */}
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
              </div>
              <div>

                
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
