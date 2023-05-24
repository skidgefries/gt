
import React, { useState , useEffect } from "react";

function Profile() {
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    // Here you can make a fetch call to your database to get the profile data
    fetch('')
      .then(response => response.json())
      .then(data => {
        setUsername(data.username);
        setProfilePic(data.profilePic);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', margin: '10px' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
        <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ background: '#eee', borderRadius: '10px', padding: '10px' }}>
        <h2>{username}</h2>
      </div>
    </div>
    
  );
}

export default Profile ;