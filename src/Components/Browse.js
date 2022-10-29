import React from "react";
import Browse1 from "../Components/Images/originimg1.png";
import Browse2 from "../Components/Images/originimg2.png";
import Browse3 from "../Components/Images/originimg3.png";
import Browse4 from "../Components/Images/originimg4.png";
import Browse5 from "../Components/Images/originimg5.png";
import Browse6 from "../Components/Images/originimg6.png";
import Browse7 from "../Components/Images/domain-names.webp";
import Browse8 from "../Components/Images/sports.webp";
import Browse9 from "../Components/Images/virtual-worlds.webp";
import Card from "react-bootstrap/Card";
import "./Browse.css";

export default function Browse(props) {
  return (
    <div className={`Browse browse-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid py-5 px-5 browse32" id="browse23">
        <h1 className="header-new"  style={{
                  color: props.mode === "light" ? "black " : "white ",
                }}>
          Browse by category
        </h1>
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards1">
              <Card.Img variant="top" src={Browse1} className="card-img-top1"  style={{
                  color: props.mode === "light" ? "black " : "white ",
                }} />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Art
                </Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards2">
              <Card.Img variant="top" src={Browse2} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Collectibles
                </Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards3">
              <Card.Img variant="top" src={Browse3} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Music
                </Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row brow">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards4">
              <Card.Img variant="top" src={Browse4} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Photography
                </Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards5">
              <Card.Img variant="top" src={Browse5} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Recordion
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards6">
              <Card.Img variant="top" src={Browse6} className="card-img-top1" />
              <Card.Body className="card-body1">
                <Card.Title
                  style={{ textAlign: "center" }}
                  className="card-title1"
                >
                  Videos
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
