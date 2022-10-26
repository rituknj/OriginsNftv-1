import React from "react";
import Browse1 from "../Components/Images/face.png";
import Browse2 from "../Components/Images/music.webp";
import Browse3 from "../Components/Images/trading-cards.webp";
import Browse4 from "../Components/Images/collectibles.webp";
import Browse5 from "../Components/Images/photography-category.webp";
import Browse6 from "../Components/Images/utility.webp";
import Browse7 from "../Components/Images/domain-names.webp";
import Browse8 from "../Components/Images/sports.webp";
import Browse9 from "../Components/Images/virtual-worlds.webp";
import Card from "react-bootstrap/Card";
import "./Browse.css";

export default function Browse() {
  return (
    <section>
      <div className="container-fluid py-5 px-5">
        <h1 className="header-browse" style={{ color: "#fff" }}>
          Browse by category
        </h1>
        <div className="row brow">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards">
              <Card.Img variant="top" src={Browse1} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Art</Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards">
              <Card.Img variant="top" src={Browse2} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Music</Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards">
              <Card.Img variant="top" src={Browse3} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Trading Card
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
            <Card className="cards">
              <Card.Img variant="top" src={Browse4} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
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
            <Card className="cards">
              <Card.Img variant="top" src={Browse5} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
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
            <Card className="cards">
              <Card.Img variant="top" src={Browse6} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Utility</Card.Title>
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
            <Card className="cards">
              <Card.Img variant="top" src={Browse7} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Domain Names
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
            <Card className="cards">
              <Card.Img variant="top" src={Browse8} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Sports</Card.Title>
                {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <Card className="cards">
              <Card.Img variant="top" src={Browse9} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Virtual Worlds
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
      </div>
    </section>
  );
}
