import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/hotimg1.png";
import Image2 from "../Components/Images/hotimg2.png";
import Image3 from "../Components/Images/hotimg3.png";
import Image4 from "../Components/Images/hotimg1.png";
import Image5 from "../Components/Images/hotimg2.png";
import Image6 from "../Components/Images/hotimg3.png";
import Image7 from "../Components/Images/hotimg1.png";
import Image8 from "../Components/Images/hotimg2.png";
import Image9 from "../Components/Images/hotimg3.png";
import small1 from "../Components/Images/smalllogo1.png";
import small2 from "../Components/Images/smalllogo2.png";
import small3 from "../Components/Images/smalllogo3.png";
import small4 from "../Components/Images/smalllogo1.png";
import small5 from "../Components/Images/smalllogo2.png";
import small6 from "../Components/Images/smalllogo3.png";
import small7 from "../Components/Images/smalllogo1.png";
import small8 from "../Components/Images/smalllogo2.png";

import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Hot.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section>
      <div className="container-fluid py-5 px-5">
        <h1 className="header-hot" style={{ color: "#fff" }}>
          {" "}
          Hot
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small1}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
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
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image4} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small4}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small5}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image6} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small5}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image7} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small6}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image8} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small7}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
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
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src={Image9} />
              <Card.Body>
                <Card.Title className="card-body12">
                  <span>
                    {" "}
                    <img
                      src={small8}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Mohammad Ali</span>
                </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
