import React from 'react'
import Icons1 from "./Images/filter-vector.png";
import Reload from "./Images/reload-vector.png";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./Nftcards.css";

export default function NFtcards() {
  return (
    <div className='d-flex'>
       <button className='vector-filter'><img src={Icons1} alt='' className='vector-bu'/>
            Filters
        </button>
        <button className='reload-button'>
            <img src={Reload} alt=''/>
        </button>
        <div
                className="input-group1221 mb-3"
              
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by NFTs"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  
                />
              </div>
              <button
                className="nft-select"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
             
              >
                Recently Listed {" "}
                <AiOutlineCaretDown
                
                />
              </button>
              {/* <ul
                className="dropdown-menu"
               
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                   
                  >
                    24 h
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                   
                  >
                    7 d
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                   
                  >
                    30 d
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/"
                   
                  >
                    All
                  </a>
                </li>
              </ul> */}
    </div>
  )
}
