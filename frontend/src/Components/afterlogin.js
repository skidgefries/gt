
import React, { useState , useEffect } from "react";
import Carousel1 from "./Carousel";
import "./afterlogin.css" 



export default function Afterlogin() {
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');
  
//fetching image andname from database
  // useEffect(() => {
  //   // Here you can make a fetch call to your database to get the profile data
  //   fetch('')
  //     .then(response => response.json())
  //     .then(data => {
  //       setUsername(data.username);
  //       setProfilePic(data.profilePic);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    //for the profile pic 
  // <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', margin: '10px' }}>
  //     <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
  //       <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%' }} />
  //     </div>
  //     <div style={{ background: '#eee', borderRadius: '10px', padding: '10px' }}>
  //       <h2>username</h2>
  //     </div>
  //  </div>
    
  //for cards 
  <>
  <div>
     <section>
       <div className="containe">
         <h1>Dashboard</h1>
         <div className="cards"> 
           
          <div className="card">
            <h3>your profile</h3>
            <p>
              This part contains phto name by fetching from database. <br></br>
              Name:TAYLOR SWIFT<br></br>
            
              Email:Swifttaylorgmail.com
            </p>
            <div className="imagecontainer">
              //add code to fetch from database
            </div>
            <button className="btn">Update Profile</button>
          </div>
         </div>
        </div>
      </section>
    </div> 
   

    <div>
     <h1>POPULAR DESTINATIONS</h1>
        <Carousel1/> 
    </div>

  </>
 
   
  
    
  );
}

