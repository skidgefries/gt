import React from "react";
import GridContainer from "./gridContainer";
import Grid from "./grid";
import Column from "./column";
import imga from "./images/boud.jpg";
import imgb from "./images/chit.webp";
import imgc from "./images/bkt.jpg";
import AddPlace from "./addPlace";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Button, Flex, Input, SkeletonText } from "@chakra-ui/react";
// import { FaLocationArrow, FaTimes } from "react-icons/fa";
//import { Marker } from "react-map-gl";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddedPlace from "./AddedPlace";

export default function LoginHome(props) {
  const { id } = useParams();
  const [plan, setPlan] = useState("");
  const [carouselImages, setCarouselImages] = useState("");
  const tripDetail = useSelector((state) => state.tripSlice);
  const itinerary = useSelector((state) => state.itinerarySlice.itinerary);

  // const itinerary = [{name: "Boudha"}, {name: "Patan"}]
  //const [streetViewImageUrl, setStreetViewImageUrl] = useState("");
  useEffect(() => {
    if (tripDetail?.noOfDays) {
      setPlan(Array.from({ length: tripDetail.noOfDays }));
    }
  }, [tripDetail?.noOfDays]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/plans/plan/${id}`
        );
        // setPlan(response.data.details);
        console.log("This is the data from the backend >>>>>>>", response.data);
      } catch (error) {
        console.error("Error fetching plan data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPlaceImage = async () => {
      try {
        const imageUrl = await getPlaceImage(
          "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
          tripDetail?.location,
          3
        );
        setCarouselImages([imageUrl]);

        // Do something with the imageUrl (e.g., save it to state or display it in the UI)
      } catch (error) {
        console.error("Error fetching place image:", error);
      }
    };

    fetchPlaceImage();
  }, [tripDetail?.location]);

  const [lat1, setlat1] = useState(27.7172);
  const [lng1, setlng1] = useState(85.324);
  const center = { lat: lat1, lng: lng1 };
  // const location = useLocation();
  // const { destination } = location.state || {};
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  // const [distance, setDistance] = useState("");
  // const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef();
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();
  const locationRef = useRef();
  // const data = ["item 1", "item 2", "item 3"];

  function Point() {
    if (locationRef.current.value === "") {
      return;
    }

    const apiKey = "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationRef.current.value}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("banepa", data);
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

  if (!tripDetail.location || !tripDetail.geoLocation) return;

  Point1();

  const handleSubmit = () => {
    console.log("Itinerary", itinerary);
  };

  return (
    <div className="fit">
      <div className="grid-container ">
        <div className="column1">
          <div className="accordion" id="accordionExample11">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo22"
                  aria-expanded="false"
                  aria-controls="collapseTwo22"
                >
                  Itinerary
                </button>
              </h2>
              <div
                id="collapseTwo22"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body quicksand13">
                  <strong>
                    <ul style={{ listStyleType: "disc" }}>
                      <li>12th June 2023</li>
                      <li>13th June 2023</li>
                      <li>14th June 2023</li>
                      <li>15th June 2023</li>
                    </ul>
                  </strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree33"
                  aria-expanded="false"
                  aria-controls="collapseThree33"
                >
                  Expenses
                </button>
              </h2>
              <div
                id="collapseThree33"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <ul style={{ listStyleType: "disc" }}>
                      <li>Expenses 1</li>
                      <li>Expenses 1</li>
                      <li>Expenses 1</li>
                      <li>Expenses 1</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <GridContainer>
            <Grid>
              <Column>
              <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active fixx">
                  <img src={imga} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item fixx">
                  <img src={imgb} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item fixx">
                  <img src={imgc} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
                    {/*                <div
                  id="carouselExampleAutoplaying"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {carouselImages.length > 0 ? (
                      carouselImages.map((imageUrl, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={index}
                        >
                          <img
                            src={imageUrl}
                            className="d-block w-100"
                            alt={`Place ${index + 1}`}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="carousel-item active">
                        <img
                          src={imgb}
                          className="d-block w-100"
                          alt="Default"
                        />
                      </div>
                    )}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                    </div>*/}
                <div className="contact-short1">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <h2>
                      Trip to {tripDetail.location}
                      <span> </span>
                    </h2>
                  </div>
                </div>
                <h1 className="alignCenter quicksand20">Itinerary</h1>
                <br />
                {/*Array.isArray(plan) &&
                plan?.map((_, index) => (
                  <p key={index}>
                    <AddPlace data={index+1} setlat1={setlat1} setlng1={setlat1}/>
                  </p>
                ))}*/}
                {itinerary?.map((item, index) => (
                  <p key={item}>
                    <AddPlace
                      data={item}
                      index={index+1}
                      setlat1={setlat1}
                      setlng1={setlat1}
                    />
                  </p>
                ))}
                <Button
                  colorScheme="purple"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Column>
            </Grid>
          </GridContainer>
        </div>
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
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </Box>
          </Flex>
        </div>
      </div>
    </div>
  );

  async function getPlaceImage(apiKey, placeName) {
    try {
      console.log("1");
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=%5B${placeName}%5D&key=%5B${apiKey}%5D`
        // `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${placeName}&inputtype=textquery&fields=photos&key=${apiKey}`
      );
      console.log("2");

      console.log("3");
      const photoReference =
        response.data.candidates[0].photos[0].photo_reference;
      const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${apiKey}`;

      return imageUrl;
    } catch (error) {
      console.error("Error fetching place 222 image:", error);
      return "";
    }
  }

  //
  function Point1() {
    // if (!plan.name) {
    //   return;
    // }
    ////console.log("hi", plan.name);

    const apiKey = "AIzaSyAOP6ZstiSFhfdwwvXy8c2dtWU7U8i-Q4Q";
    const placeName = tripDetail?.location;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        placeName
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log("bye");
        // console.log(data.status);
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setlat1(lat);
          // console.log(lat);
          setlng1(lng);
          // console.log(lng);
          <Marker position={center} />;
        } else {
          console.log(
            "Geocoding failed. lumbini Please check the address and API key."
          );
        }
      });
  }
}
