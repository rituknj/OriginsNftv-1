import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/newimg1.png";
import Image2 from "../Components/Images/newimg2.png";
import Image3 from "../Components/Images/newimg1.png";
import Image4 from "../Components/Images/newimg2.png";
import Image5 from "../Components/Images/newimg1.png";
import Image6 from "../Components/Images/newimg2.png";
import Image7 from "../Components/Images/newimg1.png";
import Image8 from "../Components/Images/newimg2.png";
import Image9 from "../Components/Images/newimg1.png";
import Smallimg1 from "../Components/Images/new-img1.png";
import Smallimg2 from "../Components/Images/new-img2.png";
import Smallimg3 from "../Components/Images/new-img3.png";
import Smallimg4 from "../Components/Images/new-img1.png";
import Smallimg5 from "../Components/Images/new-img2.png";
import Smallimg6 from "../Components/Images/new-img3.png";
import Smallimg7 from "../Components/Images/new-img1.png";
import Smallimg8 from "../Components/Images/new-img2.png";
import Smallimg9 from "../Components/Images/new-img3.png";
// import vector from "./Images/check.png";

import Card from "react-bootstrap/Card";
import { BsFillPatchCheckFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Notable.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App(props) {
  return (
    <div className={`Notable  notable-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid  py-5 px-5">
        <h1
          className="header-new"
          style={{
            color: props.mode === "light" ? "black " : "white ",
          }}
        >
          {" "}
          New and notable
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={{
          //   clickable: true,
          // }}
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
              <Card.Img
                variant="top"
                src={Image1}
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                }}
              />
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
                  <span className="text32">Somnium Space VR</span>
                  <span className="tick-icons">
                  {/* <img src={vector} alt="" className="vector-img"/> */}
                    <BsFillPatchCheckFill className="tick" />
                  </span>
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
                      src={Smallimg2}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Anzu Jungle</span>
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
                      src={Smallimg3}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Red Angrybol</span>
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
                      src={Smallimg4}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR</span>
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
                      src={Smallimg5}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Anzu Jungle</span>
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
                      src={Smallimg6}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Red Angrybol</span>
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
                      src={Smallimg7}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Somnium Space VR</span>
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
                      src={Smallimg8}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Anzu Jungle</span>
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
                      src={Smallimg9}
                      alt=""
                      style={{ display: "inline-flex" }}
                      className="card-image1"
                    />{" "}
                  </span>
                  <span className="text32">Red Angrybol</span>
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
    </div>
  );
}
