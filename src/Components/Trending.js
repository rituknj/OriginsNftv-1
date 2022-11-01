import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "react-bootstrap/Table";
import { AiOutlineCaretDown } from "react-icons/ai";
// import Icon1 from "./Images/duck.png";
import Icons1 from "./Images/trendingimg1.png";
import Icons2 from "./Images/trendingimg2.png";
import Icons3 from "./Images/trendingimg3.png";
import Icons4 from "./Images/trendingimg4.png";
import Icons5 from "./Images/trendingimg5.png";
import Icons6 from "./Images/trendingimg1.png";
import Icons7 from "./Images/trendingimg2.png";
import Icons8 from "./Images/trendingimg3.png";
import Icons9 from "./Images/trendingimg4.png";
import Icons10 from "./Images/trendingimg5.png";
import vector from "./Images/check.png";
import "./Trending.css";

function UncontrolledExample(props) {
  return (
    <div className={`Trending  trending-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid py-5 px-5">
        <div className="row">
          <Tabs>
            <TabList
              style={{
                color: props.mode === "light" ? "black " : "white ",
              }}
            >
              <Tab
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                }}
              >
                Trending
              </Tab>
              <Tab
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                }}
              >
                Top
              </Tab>
              <span
                className="h24"
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                  borderColor: props.mode === "light" ? "black " : "white ",
                }}
              >
                View All
              </span>
              <button
                className="h25"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                  backgroundColor:
                    props.mode === "light" ? "white " : "#212529 ",
                }}
              >
                24 h{" "}
                <AiOutlineCaretDown
                  style={{
                    color: props.mode === "light" ? "black " : "white ",
                    borderColor: props.mode === "light" ? "black " : "white ",
                  }}
                />
              </button>
              <ul
                className="dropdown-menu"
                style={{
                  color: props.mode === "light" ? "black " : "white ",
                  backgroundColor:
                    props.mode === "light" ? "white " : "#212529 ",
                  borderColor: props.mode === "light" ? "black " : "white ",
                }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  >
                    24 h
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  >
                    7 d
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  >
                    30 d
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                    style={{
                      color: props.mode === "light" ? "black " : "white ",
                    }}
                  >
                    All
                  </a>
                </li>
              </ul>
            </TabList>

            <TabPanel>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div className="row ">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              COLLECTION
                            </span>
                          </div>
                          <div className="floor">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              FLOOR PRICE
                            </span>
                          </div>
                          <div className="volume">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              VOLUME
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align ">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons1} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              2
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons2} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons3} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              4
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons4} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              5
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons5} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-6 table23">
                  <Table striped bordered hover className="table24" id="table1">
                    <div className="row">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              COLLECTION
                            </span>
                          </div>
                          <div className="floor">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              FLOOR PRICE
                            </span>
                          </div>
                          <div className="volume">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              VOLUME
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              6
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons6} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              7
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons7} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              8
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons8} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              9
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons9} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              10
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons10} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div>
                      <div className="top-col">
                        <div className="colllect">
                          <span
                            style={{
                              color:
                                props.mode === "light" ? "black " : "white ",
                            }}
                          >
                            COLLECTION
                          </span>
                        </div>
                        <div className="floor">
                          <span
                            style={{
                              color:
                                props.mode === "light" ? "black " : "white ",
                            }}
                          >
                            FLOOR PRICE
                          </span>
                        </div>
                        <div className="volume">
                          <span
                            style={{
                              color:
                                props.mode === "light" ? "black " : "white ",
                            }}
                          >
                            VOLUME
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons1} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              2
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons2} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons3} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              4
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons4} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              5
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons5} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA{" "}
                              <img src={vector} alt="" className="vector-img" />
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-6 table23">
                  <Table striped bordered hover>
                    <div className="row">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              COLLECTION
                            </span>
                          </div>
                          <div className="floor">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              FLOOR PRICE
                            </span>
                          </div>
                          <div className="volume">
                            <span
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              VOLUME
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              6
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons6} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              7
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons7} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              8
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons8} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              9
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons9} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="span-sr"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              10
                            </span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons10} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              RENGA
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              3.09 ETH
                            </p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p
                              className="card-name"
                              style={{
                                color:
                                  props.mode === "light" ? "black " : "white ",
                              }}
                            >
                              1,189 ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Table>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;

{
  /*          <div className="row d-flex">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="dropdown" style={{ textAlign: "right" }}>
                <button
                  className="btn-2 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  24 h
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      24 h
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      7 d
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      30 d
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12"
              style={{ textAlign: "right" }}
            >
              <button type="button" className="btn1">
                View all
              </button>
            </div>
          </div> */
}
