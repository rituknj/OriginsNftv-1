import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Refresh from "./Images/refresh.png";
import "./Collectionsearchpanal.css"

export default function Collectionsearchpanal() {
  return (
    <>
    <div className='container-fluid collection'>
    <div className='row'>
    <div className='col-lg-2 col-md-1 col-sm-6 col-12' >
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic"  className="categories-tab">
     Categories
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

    </div>
    <div className='col-lg-2 col-md-1 col-sm-6 col-12'>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic"  className="categories-tab">
      All chains
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    
    </div>
    <div className='col-lg-1 col-md-1 col-sm-6 col-12'>
    <button className="refresh-button"><img src={Refresh} alt=""/></button>
    </div>
    
    <div className='col-lg-7 col-md-7 col-sm-6 col-12'>
    <span className='tabs-time'><span className='time1 hour '>1h</span><span className='time1'> 6h</span><span className='time1'>24h</span><span className='time1'>7d</span><span className='time1'>30d</span><span className='time1'>all</span></span>
    </div>
    
    </div>
    
    </div>
    </>
  )
}
