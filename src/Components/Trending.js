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
import CollectionTable1 from "./CollectionTable1"
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
              
              <div><CollectionTable1/></div>
            </TabPanel> 
            <TabPanel>
             
              <div><CollectionTable1/></div>
            </TabPanel>
          </Tabs>
          
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;


