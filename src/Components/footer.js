import React from "react";
import img from "./images/navLogo.png";
export default function footer() {
  return (
    <>
      <div>
        <div className="contact-short">
          <div>
            <navLink to="/">
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <h1>
                  Ready to get started? <span> </span>
                </h1>
                <button type="button" className=" btn btn-outline-light btn-lg">
                  Get Started
                </button>
              </div>
            </navLink>
          </div>
        </div>
      </div>
        <div className="container1 footerbg">

          <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          
            <img
              src={img}
              alt="Logo"
              width="300"
              height="150"
              style={{
                borderRadius: 250,
              }}
            />
          </div>
          <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
            <h2> Contacts</h2>
            <p className="quicksand " style={{ fontSize: 20 }}>
              {" "}
              986100000000
              <br />
              guidedtravels@gmail.com
            </p>
          </div>
          <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
            <h2> Guided Travels </h2>
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0 quicksand ">
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Car Rental<span> </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Trekking Route<span> </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
          <br />
          <br />
          <br />
          <br />
          <br />
            <h2> Guides and resources </h2>
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0 quicksand ">
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Best places to visit by category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Heritages Site
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Weather In Nepal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontSize: 20 }} href="/">
                  Restaurant around the destination
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    </>
  );
}
