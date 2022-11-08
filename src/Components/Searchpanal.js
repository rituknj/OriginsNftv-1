import React from "react";
import Filter from "./Images/filter.png";
import Refresh from "./Images/refresh.png";
import "./Searchpanal.css"

export default function Searchpanal() {
  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-lg-1 col-md-2 col-sm-6 col-6">
          <button className="filter-button"><img src={Filter} alt=""/>Filters</button>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-6 col-6">
          <button className="refresh-button"><img src={Refresh} alt=""/></button>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="input-group22 ">
            <input
              type="text"
              className="form-control110"
              placeholder="Search by NFTs"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 col-6">
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Recently Listed
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/">Action</a></li>
    <li><a class="dropdown-item" href="/">Another action</a></li>
    <li><a class="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-6 col-6">
          <button>Filters</button>
        </div>
      </div>
    </div>
  );
}
