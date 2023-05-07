// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Login} from './Components/Login';
import {Register} from './Components/Register';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";



function App() {

  const [ currentForm , setCurrentForm ] = useState ('login');

  const toggleform = (formName) => 
  {
    setCurrentForm(formName);
  }


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

       {/* nush added code in line 68
       This route was included inorder to include the profile screen
        #AND PROFILE SCREEN IS YET TO BE ADDED TO NAVBAR */ }
        {/*<Route path="/profile" element={<ProfileScreen/>}/>*}
          
            
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

