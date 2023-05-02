// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import axios from 'axios';

// const str= ("mongodb+srv://pranawrajkafleprk:HaaSoDXOAxWdgyNe@cluster0.hpybsct.mongodb.net/GuidedTravels")
import {Login} from './Components/Login';
import {Register} from './Components/Register';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
<>


{/* This is the alias of BrowserRouter i.e. Router */}

<Router>
<Navbar mode={mode} toggleMode={toggleMode}/>

        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
        we passes the imported component*/}
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
        props we passes the imported component
          */}
        <Route path="/Login" element={<Login />} />
          
          <Route path="/About" element={<About />} />
          {/* This route is for contactus component
          with exact path "/contactus", in 
        component props we passes the imported component
      */}
        <Route path="/Register" element={<Register />} />
          
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
          
        </Routes>
    </Router>

{/*<Navbar title="GuidedTravels" mode={mode} toggleMode={toggleMode}/>
<About/>*/}


</>

  );
}

export default App;

