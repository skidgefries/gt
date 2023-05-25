import React from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {Flex, Box, SkeletonText,} from "@chakra-ui/react";
import {  useState, useEffect } from "react";
export default function Map({apiKey}) {

  
  // const MapComponent = withScriptjs(withGoogleMap(() => (
  //   <GoogleMap
  //     defaultZoom={8}
  // defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
  //   >
  //     <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
  //   </GoogleMap>
  // )));
  

  const [lat1, setlat1] = useState(27.7172);
  const [lng1, setlng1] = useState(85.324);
  const center = { lat: lat1, lng: lng1 };
  //const location = useLocation();
  //const { destination } = location.state || {};
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });
  
  return (
    <div className="column3">
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: false,
          }}
          //onLoad={(map) => setMap(map)}
        >
          {/* <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )} */}
        </GoogleMap>
      </Box>
      
    </Flex>
  </div>
  );
}

