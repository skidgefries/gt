import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { Box, Flex, SkeletonText } from "@chakra-ui/react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import img from "./images/defaultuser.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel1 from "./Carousel";
import Card1 from "./cards";

export default function Afterlogin(props) {
  // const user = {

  const [user, setUser] = useState("");
  //   profileImage: "path/to/profile-image.jpg",
  //   fullName: "John Doe",
  //   userName: "johndoe",
  // };
  const center = { lat: 27.7172, lng: 85.324 };
  const [imgSrc, setImgSrc] = useState(img);

  const { id } = useParams();
  const token = localStorage.getItem("accessToken");

  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  // fetching image andname from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/userProfile/${id}`,
          { headers }
        );
        setUser(response.data.details);
        console.log("This is the data from the backend >>>>>>>", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id]);

  const trips = [
    { id: 1, title: "Trip 1", description: "Description 1" },
    { id: 2, title: "Trip 2", description: "Description 2" },
    { id: 3, title: "Trip 3", description: "Description 3" },
  ];

  const handleEdit = () => {
    // Handle edit functionality
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <div className="container">
      <div className="user-details">
        <div className="profile-box">
          <div className="profile-image">
            <img src={imgSrc} alt="Profile" className="circular-image" />
          </div>
          <div className="user-info">
            <div className="full-name">{user.name}</div>
            <div className="user-name">@{user.username}</div>
          </div>
          <Button variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
        </div>

        <div className="map">
          <Flex position="relative" alignItems="center" h="100%">
            <Box w="100%" h="100%">
              <GoogleMap
                center={center}
                zoom={7}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: true,
                  fullscreenControl: false,
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            </Box>
          </Flex>
        </div>
      </div>
   

      <div className="trip-section">

        <div>
          <h2>Your Trips</h2>  <button> + New Trip</button>
          <Carousel1 />
        </div>

        <div>
          <h2>Upcomming trips</h2>
          <Carousel1 />
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import Carousel1 from "./Carousel";
// import "./afterlogin.css";
// import { Box, Flex, SkeletonText } from "@chakra-ui/react";
// import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function Afterlogin(props) {
//   const [user, setUser] = useState("");
//   const [username, setUsername] = useState("");
//   const [profilePic, setProfilePic] = useState("");
//   const center = { lat: 27.7172, lng: 85.324 };

//   const { id } = useParams();
//   const token = localStorage.getItem("accessToken");

//   const headers = {
//     Authorization: token,
//     'Content-Type': 'application/json',
//   };
//   // fetching image andname from database
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/user/userProfile/${id}`,
//           { headers }
//         );
//         setUser(response.data.details);
//         console.log("This is the data from the backend >>>>>>>", response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
//     libraries: ["places"],
//   });

//   //const [map,setMap] = useState(/** @type google.maps.Map */ (null));

//   if (!isLoaded) {
//     return <SkeletonText />;
//   }

//   return (
//     //for the profile pic
//     // <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', margin: '10px' }}>
//     //     <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
//     //       <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%' }} />
//     //     </div>
//     //     <div style={{ background: '#eee', borderRadius: '10px', padding: '10px' }}>
//     //       <h2>username</h2>
//     //     </div>
//     //  </div>

//     //for cards
//     <>
//       <div className="column4">
//         <Flex
//           position="relative"
//           flexDirection="column"
//           alignItems="center"
//           h="100vh"
//         >
//           <Box position="absolute" left={600} top={0} h="100%" w="100%">
//             <GoogleMap
//               center={center}
//               zoom={7}
//               mapContainerStyle={{ width: "100%", height: "50%" }}
//               options={{
//                 zoomControl: true,
//                 streetViewControl: false,
//                 mapTypeControl: true,
//                 fullscreenControl: false,
//               }}
//               // onLoad={(map) => setMap(map)}
//             >
//               <Marker position={center} />
//             </GoogleMap>
//           </Box>
//         </Flex>
//       </div>

//       <div>
//         <section>
//           <div className="containe">
//             <h1>Dashboard</h1>
//             <div className="cards">
//               <div className="card">
//                 <h3>{user.name}</h3>
//                 <p>
//                   This part contains phto name by fetching from database.{" "}
//                   <br></br>@{user.username}
//                   <br></br>
//                   {user.email}
//                 </p>
//                 <div className="imagecontainer">
//                   {/* //add code to fetch from database */}
//                 </div>
//                 <button className="btn">Update Profile</button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div>
//         <h1>POPULAR DESTINATIONS</h1>
//         <Carousel1 />
//       </div>
//     </>
//   );
// }
