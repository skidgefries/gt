// import logo from './logo.svg';
import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Navbar1 from "./Components/Navbar";
import Navbar2 from "./Components/afterLoginNavbar";
import Home from "./Components/Home";
import Carousel1 from "./Components/Carousel";
//import ProfileScreen from "./Components/ProfileScreen";
import Loginhome from "./Components/LoginHome";
import LoginScreen from "./Components/LoginScreen";
import { Toaster } from "react-hot-toast";
import Map from './Components/map'; 
import Afterlogin from "./Components/afterlogin";
//import Carousel1 from "./Components/Carousel";
// import axios from 'axios';


import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  const apiKey = 'AIzaSyDnqzvG0A1JmiMvayhbt_T_5IXtRO0DiHQ';
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [currentForm, setCurrentForm] = useState(
    localStorage.getItem("accesstoken")
      ? localStorage.getItem("accessToken")
      : "home"
  );
  
  const toggleForm = (forName) => {
    if(forName==="home"){
     setCurrentForm("home");
     localStorage.removeItem("accessToken");}
     else{
      setCurrentForm(forName);
      localStorage.setItem("accessToken", forName);
     }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [result, setResult] = useState(null)
  const [modal,setmodal] = useState(false)
  const [data,setData] = useState(null)
  return (
    <>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>
          {currentForm === "home" ? (
            <Navbar1 mode={mode} toggleMode={toggleMode} setmodal={setmodal} />
          ) : (
            <Navbar2 mode={mode} onFormSwitch={toggleForm} toggleMode={toggleMode} />
          )}

          <Routes>

          { localStorage.getItem("accessToken") ?(
            <Route path="/" element={<Loginhome />} />
          ): (
            <Route path="/" element={<Home modal={modal} setmodal={setmodal}/>} />
          ) }
            
            <Route path="/Home" element={<Home modal={modal} setmodal={setmodal}/>} />
            <Route path="/LoginHome/plans/plan/:id" element={<Loginhome data={data} setData={setData} result={result} setResult={setResult}/>} />
            <Route
              path="/Login"
              element={<Login onFormSwitch={toggleForm} modal={modal} setmodal={setmodal} />}
            />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<afterlogin />} />
            <Route path="/LoginScreen" element={<LoginScreen />} />
            <Route path="/Afterlogin" element={<afterlogin/>} />
            {/* <Route path="/ProfileScreen" element={<ProfileScreen />} /> */}
          </Routes>
        </Router>
      </div>

      <div>
        <Map apiKey={apiKey} /> 
      </div>

      {/* <div>
        <ProfileScreen/>
      </div> */}

      <div>
        <h1>POPULAR DESTINATIONSs</h1>
        <Carousel1/>
      </div>
        <Afterlogin/>
      
      {/* <div>
        <h1>POPULAR DESTINATIONS</h1>
        <Carousel1/>
      </div> */}

    </>
  );
}

export default App;
