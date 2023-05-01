// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';



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
{/*<Navbar title="GuidedTravels" mode={mode} toggleMode={toggleMode}/>
<About/>*/}
<Navbar mode={mode} toggleMode={toggleMode}/>
<Home/>
</>
  );
}

export default App;

