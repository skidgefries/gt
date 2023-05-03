import React from "react";
import PropTypes from "prop-types"; //impt
import logo from "./images/navLogo.png";
import { NavLink,useLocation,useNavigate } from "react-router-dom";

export default function Navbar(props) {
  // const location=useLocation()
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        <div className="center1">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="70"
              className=" align-text-top"
            />
          </NavLink>
          <div>
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to="./Home"
                >
                  HOME
                </NavLink>
              </li>
              <h3 style={{ color: "#ced0b6", fontSize: 45 }}>|</h3>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to="./About"
                >
                  ABOUT US
                </NavLink>
              </li>
              <h3 style={{ color: "#ced0b6", fontSize: 45 }}>|</h3>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style={{ font: "Montserrat", fontSize: 30 }} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USER PROFILE
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </li>
        <h3 style={{ color: "#ced0b6", fontSize: 45 }}>|</h3>

              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
</ul>*/}

              <div
                className={`form-check form-switch form-check-reverse text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <a
                  className="nav-link"
                  style={{ font: "Montserrat", fontSize: 30 }}
                  href="/"
                >
                  <input
                    className="form-check-input"
                    style={{ font: "Montserrat", fontSize: 33 }}
                    onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckReverse"
                  />
                  <label
                    className="form-check-label"
                    style={{ font: "Montserrat", fontSize: 30 }}
                    htmlFor="flexSwitchCheckReverse"
                  >
                    ENABLE DARKMODE
                  </label>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="right">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
