import React, { useState } from "react";
import Footer from "./Footer";
import "./Mycollections.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const width = 175;
const height = 175;
const borderStyle = "3px dashed #C5C5C5";

const dropAreaImageStyle = {
  width,
  height,
};

const dropAreaStyle = {
  ...dropAreaImageStyle,
  border: borderStyle,
};

export default function Mycollections() {
  const [show, setShow] = useState(false);

  const [data, setData] = useState(false);
  const [err, setErr] = useState(false);

  const [data2, setData2] = useState(false);
  const [err2, setErr2] = useState(false);

  const [data3, setData3] = useState(false);
  const [err3, setErr3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDrop = (e) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    console.log("Files: ", files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
    };
  };
  const onDragStart = (e) => {
    e.preventDefault();
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };

  // / SECOND DRAG AND DROP/
  const onDrop2 = (e2) => {
    e2.preventDefault();
    const {
      dataTransfer: { files },
    } = e2;
    console.log("Files: ", files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
    };
  };
  const onDragStart2 = (e2) => {
    e2.preventDefault();
  };
  const onDragOver2 = (e2) => {
    e2.preventDefault();
  };

  //   THIRE PART

  const onDrop3 = (e3) => {
    e3.preventDefault();
    const {
      dataTransfer: { files },
    } = 3;
    console.log("Files: ", files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(false);
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target.result);
    };
  };
  const onDragStart3 = (e3) => {
    e3.preventDefault();
  };
  const onDragOver3 = (e3) => {
    e3.preventDefault();
  };

  return (
    <div>
      <div
        className="color-nav"
        style={{ background: " rgba(166, 166, 166, 0.5) " }}
      >
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid px-5">
            <a className="navbar-brand" href="/"></a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ float: "right" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <input
                  type="text"
                  className="form-control11"
                  placeholder="Search items, collection, accounts"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />

                <div className="dropdown">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/nft"
                    >
                      Explore-much
                    </a>
                    <div class="dropdown-content">
                      <a href="/">Link 1</a>
                      <a href="/">Link 2</a>
                      <a href="/">Link 3</a>
                    </div>
                  </li>
                </div>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Stats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Create
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid background-image">
        <h1 className="mycollection-head">My Collections</h1>
        <p className="mycollection-para">
          Create, curate, and manage collections of unique NFT's to share and
          sell
        </p>
        {/* <button className='collection-button'>Create Collections</button> */}
        <Button
          variant="primary"
          className="collection-button"
          onClick={handleShow}
        >
          Create Collections
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          modal-dialog
          modal-dialog-scrollable
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a Collection</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
          <form>
            <div>
              <span className="" required>
                *Required fields
              </span>
              <p>Logo image*</p>
              <p>
                {" "}
                This image will also be used for navigation, 350x350 recommended
              </p>
              <div>
                {err && <p>{err}</p>}
                <div
                  className="drop-area-style"
                  style={dropAreaStyle}
                  onDrop={(e) => onDrop(e)}
                  onDragOver={(e) => onDragOver(e)}
                >
                  {data && <img style={dropAreaImageStyle} src={data} />}
                </div>
                <div className="button-wrapper">
                  {data && (
                    <button onClick={() => setData(false)}>Remove</button>
                  )}
                </div>
              </div>
              <div>
                <p>Featured Image</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, velit.
                </p>
                <div>
                  {err2 && <p>{err2}</p>}
                  <div
                    className="drop-area-style2"
                    // style={dropAreaStyle}
                    onDrop={(e2) => onDrop2(e2)}
                    onDragOver={(e2) => onDragOver2(e2)}
                  >
                    {data && <img style={dropAreaImageStyle} src={data} />}
                  </div>
                  <div className="button-wrapper">
                    {data && (
                      <button onClick={() => setData(false)}>Remove</button>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p>Banner Image</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus autem corrupti dignissimos sunt odit minus sit eaque
                  fuga ut dolores.
                </p>
                <div>
                  {err3 && <p>{err3}</p>}
                  <div
                    className="drop-area-style2"
                    // style={dropAreaStyle}
                    onDrop={(e3) => onDrop2(e3)}
                    onDragOver={(e3) => onDragOver2(e3)}
                  >
                    {data && <img style={dropAreaImageStyle} src={data} />}
                  </div>
                  <div className="button-wrapper">
                    {data && (
                      <button onClick={() => setData(false)}>Remove</button>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <p>Name*</p>
                <div>
                  <input
                    className="name-input"
                    placeholder="Example: The Recordian Music"
                  />
                </div>
              </div>
              <div>
                <p>URL</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore officia cumque nam esse nesciunt libero tempore
                  architecto ratione quia explicabo?
                </p>
                <input
                  placeholder="https://originsnft.io/collection/"
                  className="url-input"
                />
              </div>
              <div>
                <p>
                  <strong style={{ color: "#FEC200" }}>Markdown</strong> syntax
                  is supported. 0 of 1000 characters used
                </p>
                <input className="url-input2" />
              </div>
              <div>
                <p>Category</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                  atque possimus nisi deserunt debitis voluptates sint obcaecati
                  facere voluptatum eveniet.
                </p>
                <button className="category-button">+ Add category</button>
              </div>
              <div>
                <p>Links</p>
                <div className="links-input">
                  <input className="youtube-input" placeholder="yoursite.io" />
                  <input
                    className="m-input"
                    placeholder="https://www.medium.com/@mediumhandle"
                  />
                  <input
                    className="telegram-input"
                    placeholder="https://www.medium.com/@username"
                  />
                </div>
              </div>
              <div>
                <p>Create earnings</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur at amet ipsa illo nemo fuga ipsum iure commodi
                  sunt quam.
                </p>
                <button className="address-button">+ Add Address</button>
              </div>
              <div></div>
            </div>
            <div></div>
          </form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="container main-content">
        <div>
          <h2 style={{ textAlign: "center" }}>No items to display</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
