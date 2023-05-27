// import logo from './logo.svg';
import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Navbar1 from "./Components/Navbar";
import Plan from "./Components/planTrip";
import Navbar2 from "./Components/afterLoginNavbar";
import Home from "./Components/Home";
import Carousel1 from "./Components/Carousel";
//import ProfileScreen from "./Components/ProfileScreen";
import Loginhome from "./Components/LoginHome";
import Settings from "./Components/settings";
import AddPlace from "./Components/addPlace";
import DateCalculator from "./Components/planTrip";
import PlanTrip from "./Components/planTrip";
import NotFound from "./Components/NotFound";
import Protected from "./PrivateRoute";

// import LoginScreen from "./Components/LoginScreen";
import { Toaster } from "react-hot-toast";
import Afterlogin from "./Components/afterlogin";
//import Carousel1 from "./Components/Carousel";
// import axios from 'axios';

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('accessToken');

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
//     />
//   );
// };

function App() {
  const apiKey = "AIzaSyDnqzvG0A1JmiMvayhbt_T_5IXtRO0DiHQ";
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [currentForm, setCurrentForm] = useState(
    localStorage.getItem("accesstoken")
      ? localStorage.getItem("accessToken")
      : "home"
  );

  const toggleForm = (forName) => {
    if (forName === "home") {
      setCurrentForm("home");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
    } else {
      setCurrentForm(forName);
      localStorage.setItem("accessToken", forName);
      // localStorage.setItem("userId", forName);
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
  const [result, setResult] = useState(null);
  const [modal, setmodal] = useState(false);
  const [data, setData] = useState(null);
  return (
    <>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>
        {!localStorage.getItem("accessToken") && !localStorage.getItem("userId") ? (
            <Navbar1 mode={mode} toggleMode={toggleMode} setmodal={setmodal} />
          ) : (
            <Navbar2
              mode={mode}
              onFormSwitch={toggleForm}
              toggleMode={toggleMode}
            />
          )}

          <Routes>
            {localStorage.getItem("accessToken") ? (
              <Route
                path="/"
                element={<Home modal={modal} setmodal={setmodal} />}
              />
            ) : (
              <Route
                path="/"
                element={<Home modal={modal} setmodal={setmodal} />}
              />
            )}

            <Route
              path="/Home"
              element={<Home modal={modal} setmodal={setmodal} />}
            />
            {/* <Route path="/LoginHome/plans/plan/:id" element={<PrivateRoute />}> */}
            <Route
              path="/LoginHome/plans/plan/:id"
              element={
                <Protected>
                  <Loginhome
                    data={data}
                    setData={setData}
                    result={result}
                    setResult={setResult}
                  />
                </Protected>
              }
            />
             <Route
              path="/LoginHome"
              element={
                <Protected>
                  <Loginhome
                    data={data}
                    setData={setData}
                    result={result}
                    setResult={setResult}
                  />
                </Protected>
              }
            />
            {/* </Route> */}
            <Route
              path="/Login"
              element={
                <Login
                  onFormSwitch={toggleForm}
                  modal={modal}
                  setmodal={setmodal}
                />
              }
            />
            <Route
              path="/addPlace"
              element={<AddPlace data={data} setData={setData} />}
            />
            <Route
              path="/plantrip"
              element={
                <Protected>
                  <Plan data={data} setData={setData} />
                </Protected>
              }
            />

            <Route
              path="/Register"
              element={<Register modal={modal} setmodal={setmodal} />}
            />
            <Route path="/About" element={<About />} />

            <Route path="/PlanTrip" element={<PlanTrip />} />

            {/* <Route path="/Dashboard/settings/:id" element={<PrivateRoute />}> */}
            <Route
              path="/Dashboard/settings/:id"
              element={
                <Protected>
                  <Settings modal={modal} setmodal={setmodal} />
                </Protected>
              }
            />
            {/* </Route> */}

            {/* <Route path="/Dashboard/:id" element={<PrivateRoute />}> */}
            <Route
              path="/Dashboard/:id"
              element={
                <Protected>
                  <Afterlogin />
                </Protected>
              }
            />
            {/* </Route> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>

      {/* <div>
        <ProfileScreen/>
      </div> */}

      {/*<div>
        <h1>POPULAR DESTINATIONSs</h1>
        <Carousel1/>
      </div>
        <Afterlogin/> */}

      {/* <div>
        <h1>POPULAR DESTINATIONS</h1>
        <Carousel1/>
      </div> */}
    </>
  );
}

export default App;
