import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SkeletonText, Box } from "@chakra-ui/react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function LoginHome(props) {
  const { id } = useParams();
  const [plan, setPlan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/plans/plan/${id}`
        );
        setPlan(response.data.details);
        console.log(
          "This is the data from the backend >>>>>>>",
          response.data
        );
      } catch (error) {
        console.error("Error fetching plan data:", error);
      }
    };

    fetchData();
  }, [id]);

  const [lat1, setlat1] = useState(27.7172);
  const [lng1, setlng1] = useState(85.324);
  const center = { lat: lat1, lng: lng1 };
  const location = useLocation();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();
  const locationRef = useRef();
  const data = ["item 1", "item 2", "item 3"];

  function Point() {
    if (locationRef.current.value === "") {
      return;
    }

    const apiKey = "YOUR_API_KEY";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationRef.current.value}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("dfghjk", data);
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setlat1(lat);
          setlng1(lng);
        } else {
          console.log(
            "Geocoding failed. Please check the address and API key."
          );
        }
      });
  }

  if (!isLoaded) {
    return <SkeletonText />;
  }

  console.log(props.result);
  Point1();

  return (
    <div className="fit">
      {/* Rest of your code */}
      <div className="column2">
        {/* Rest of your code */}
        <GridContainer>
          <Grid>
            <Column>
              <div className="carousel-inner">
                {plan && plan.addresses ? (
                  plan.addresses.map((address, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={`https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${address.lat},${address.lng}&key=YOUR_API_KEY`}
                        className="d-block w-100"
                        alt="Street View"
                      />
                    </div>
                  ))
                ) : (
                  <div>No addresses found</div>
                )}
              </div>
              {/* Rest of your code */}
            </Column>
          </Grid>
        </GridContainer>
      </div>
      {/* Rest of your code */}
    </div>
  );

  function Point1() {
    if (plan.name === "") {
      return;
    }

    const apiKey = "YOUR_API_KEY";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${plan.name}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("dfghjk", data);
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setlat1(lat);
          setlng1(lng);
        } else {
          console.log(
            "Geocoding failed. Please check the address and API key."
          );
        }
      });
  }
}
