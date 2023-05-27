import React from "react";
import PropTypes from "prop-types"; //impt
import logo from "./images/navLogo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  // const location=useLocation()
  const userId = localStorage.getItem("userId");
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/Dashboard/:id">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="70"
            className=" align-text-top"
          />
        </NavLink>
        <div className="rightNav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0  ">

               <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to={`./Dashboard/${userId}`}
                >
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={{ font: "Montserrat", fontSize: 30 }}
                  to="./About"
                >
                  ABOUT US
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ font: "Montserrat", fontSize: 30 }}
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USER PROFILE
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                    to={`Dashboard/settings/${userId}`}
                    className="dropdown-item "
                    
                  >
                    Settings
                  </NavLink>
                  
                  </li>
                  <li>
                    <NavLink
                      to="/Home"
                      onClick={() => props.onFormSwitch("home")}
                      className="dropdown-item  "
                    >
                      Log Out
                    </NavLink>
                  </li>
                </ul>
              </li>

              

            </ul>
          </div>
        </div>
      </div>

    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };