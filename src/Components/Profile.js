import React from 'react'
import "./Profile.css"

export default function Profile() {
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
        <div className='container-fluid background'>
        </div>
        <div className='container'>
        <div>
        <img/>
        <p>Jane Doe</p>

        </div>

        </div>
      </div>
    </div>
  )
}
