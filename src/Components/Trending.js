import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
// import Icon1 from "./Images/duck.png";
import Icons from "./Images/duck.png";
import "./Trending.css";

function UncontrolledExample() {
  return (
    <section>
      <div className="container-fluid py-5 px-5">
        <div className="row">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 uncontrolled"
          >
            <Tab eventKey="home" title="Trending">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div className="row ">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span>COLLECTION</span>
                          </div>
                          <div className="floor">
                            <span>FLOOR PRICE</span>
                          </div>
                          <div className="volume">
                            <span>VOLUME</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align ">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span className="span-sr">1</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">2</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">3</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">4</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">5</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <thead>
                    <tr>
                      <th>COLLECTION</th>
                      <th></th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody> */}
                  </Table>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div className="row">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span>COLLECTION</span>
                          </div>
                          <div className="floor">
                            <span>FLOOR PRICE</span>
                          </div>
                          <div className="volume">
                            <span>VOLUME</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span className="span-sr">1</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">2</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">3</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">4</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">5</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <thead>
                    <tr>
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody> */}
                  </Table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Top">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div>
                      <div className="top-col">
                        <div className="colllect">
                          <span>COLLECTION</span>
                        </div>
                        <div className="floor">
                          <span>FLOOR PRICE</span>
                        </div>
                        <div className="volume">
                          <span>VOLUME</span>
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
                            <span className="span-sr">1</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">2</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">3</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">4</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">5</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <thead>
                    <tr>
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody> */}
                  </Table>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <Table striped bordered hover>
                    <div className="row">
                      <div>
                        <div className="top-col">
                          <div className="colllect">
                            <span>COLLECTION</span>
                          </div>
                          <div className="floor">
                            <span>FLOOR PRICE</span>
                          </div>
                          <div className="volume">
                            <span>VOLUME</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row text-align">
                          <div
                            className="col-lg-1 col-md-1 col-sm-1 col-1"
                            style={{ textAlign: "right" }}
                          >
                            <span className="span-sr">1</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">2</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">3</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">4</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
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
                            <span className="span-sr">5</span>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <img src={Icons} alt="" className="icons-1" />
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                            <p className="card-name">Nyolings</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">0.12 ETH</p>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                            <p className="card-name">302 ETH</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <thead>
                    <tr>
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody> */}
                  </Table>
                </div>
              </div>
            </Tab>
          </Tabs>
          <div className="row d-flex">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default UncontrolledExample;
