import React from 'react'
import PropTypes from 'prop-types' //impt
import logo from'./images/navLogo.png';
import  Login from "./Login";
import Register from "./Register";

export default function Navbar(props) {
  return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>  
        <div className="container-fluid">
        <div className="center1">
            <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo"  width="150" height="70" className=" align-text-top"/> 
                </a>
                {/*<a className="navbar-brand" href="/" font>{props.title}</a>*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" navbar-nav me-auto mb-2 mb-lg-0  ">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{font:"Montserrat", fontSize:30 }} href="/">HOME</a>
                </li>
                <h3 style={{color:"#ced0b6", fontSize:45}}>|</h3>
                <li className="nav-item">
                <a className="nav-link" style={{font:"Montserrat", fontSize:30 }} href="/">ABOUT US</a>
                </li>
                <h3 style={{color:"#ced0b6",fontSize:45}}>|</h3>
                <li className="nav-item">
                <a className="nav-link" style={{font:"Montserrat", fontSize:30 }} href="Register">SIGN UP</a>
                </li>
                <h3 style={{color:"#ced0b6",fontSize:45}}>|</h3>
                <li className="nav-item">
                <a className="nav-link"  style={{font:"Montserrat", fontSize:30 }} href="Login">LOGIN<span>{' '}</span></a>
                </li>
                <h3 style={{color:"#ced0b6",fontSize:45}}>|</h3>
                {/*<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li> 
  */}
               {/* <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-danger" type="submit">Search</button>
</form>*/}
 <div className={`form-check form-switch form-check-reverse text-${props.mode==='light'?'dark':'light'}`}>
 <a className="nav-link" style={{font:"Montserrat", fontSize:30 }} href="/">
  <input  className="form-check-input" style={{font:"Montserrat", fontSize:33 }} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckReverse"/>
  <label className="form-check-label" style={{font:"Montserrat", fontSize:30 }} htmlFor="flexSwitchCheckReverse">ENABLE DARKMODE</label>
    </a>

</div>

</ul>
            
            </div>
            </div>
            </div>
        </nav>
        
  )
}

Navbar.propTypes = {title: PropTypes.string}
